// server.js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/auth')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/tu_base_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// server.js (después de la conexión a la base de datos)
const User = require('./models/User')
const bcrypt = require('bcrypt')

const createAdminUser = async () => {
  const existingAdmin = await User.findOne({ role: 'admin' })
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    const adminUser = new User({
      username: 'admin',
      password: hashedPassword,
      role: 'admin'
    })
    await adminUser.save()
    console.log('Usuario administrador creado')
  }
}

mongoose.connection.once('open', () => {
  console.log('Conectado a la base de datos')
  createAdminUser()
})

const adminRoutes = require('./routes/admin')
app.use('/api/admin', adminRoutes)
