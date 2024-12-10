// routes/admin.js
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { verifyToken, isAdmin } = require('../middleware/auth')

// Crear usuario empleado
router.post('/create-user', verifyToken, isAdmin, async (req, res) => {
  try {
    const { username, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, password: hashedPassword, role: 'employee' })

    await newUser.save()
    res.status(201).json({ message: 'Usuario empleado creado exitosamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario empleado' })
  }
})

module.exports = router
