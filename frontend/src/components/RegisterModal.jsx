// src/components/RegisterModal.jsx
import React, { useState } from 'react';

export default function RegisterModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de registro (ej. API para crear usuario)
    console.log('Registering:', { username, email, password });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 max-w-md p-8 relative">
        {/* Botón de cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none text-2xl">
          &times;
        </button>

        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Registro</h2>

        {/* Formulario de registro */}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Usuario</label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Al registrarte, aceptas nuestros términos y condiciones.
          </p>

          <button type="submit" className="bg-orange-800 text-white w-full py-2 rounded hover:bg-orange-700 transition duration-300">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}