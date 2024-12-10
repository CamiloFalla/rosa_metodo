// middleware/auth.js
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) return res.status(401).json({ error: 'Acceso denegado' })

  try {
    const decoded = jwt.verify(token, 'tu_secreto_jwt')
    req.user = decoded
    next()
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' })
  }
}

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permisos de administrador' })
  }
  next()
}

module.exports = { verifyToken, isAdmin }
