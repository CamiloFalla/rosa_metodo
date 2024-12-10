// routes/auth.js
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Registro
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ error: 'El nombre de usuario ya está en uso' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, password: hashedPassword })

    await newUser.save()
    res.status(201).json({ message: 'Usuario registrado exitosamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' })
  }
})

module.exports = router

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' })
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, 'tu_secreto_jwt', {
      expiresIn: '1h'
    })

    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
})
