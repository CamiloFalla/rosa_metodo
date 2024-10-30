// src/components/LoginModal.jsx

import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

export default function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleRegisterModal = () => setIsRegisterOpen((prev) => !prev);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', { username, password });
  };

  return (
    <>
      {/* Modal de inicio de sesión */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-3/4 max-w-md p-8 relative">
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none text-2xl"
          >
            &times;
          </button>

          {/* Título */}
          <h2 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h2>

          {/* Formulario de inicio de sesión */}
          <form onSubmit={handleLogin}>
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

            {/* Mensaje de protección de datos */}
            <p className="text-gray-600 text-sm mb-4">
              Tu información está segura con nosotros. Respetamos y protegemos tus datos personales.
            </p>

            <button
              type="submit"
              className="bg-orange-800 text-white w-full py-2 rounded hover:bg-orange-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Botón para abrir el modal de registro */}
          <div className="text-center mt-4">
            <button
              onClick={toggleRegisterModal}
              className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-300"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* Modal de registro como un modal separado */}
      {isRegisterOpen && (
        <RegisterModal isOpen={isRegisterOpen} onClose={toggleRegisterModal} />
      )}
    </>
  );
}