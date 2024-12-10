// models/User.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'employee'], default: 'employee' }
})

module.exports = mongoose.model('User', userSchema)
