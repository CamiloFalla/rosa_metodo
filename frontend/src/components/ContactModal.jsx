import React from 'react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 max-w-4xl p-8 relative">
        {/* Botón de cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none text-2xl">
          &times;
        </button>

        <div className="flex">
          {/* Formulario de contacto */}
          <div className="w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Contactenos</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre</label>
                <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Danos un mensaje de que necesitas</label>
                <textarea id="message" className="w-full border border-gray-300 p-2 rounded"></textarea>
              </div>
              <button type="submit" className="bg-earth-primary text-white px-4 py-2 rounded hover:bg-earth-secondary">
                Enviar
              </button>
            </form>
          </div>

          {/* Información de la empresa */}
          <div className="w-1/3 px-8">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Compañia</h2>
            <p className="text-gray-600">Evaluamos el puesto de trabajo</p>
          </div>

          {/* Imagen de la compañía */}
          <div className="w-1/3">
            <img src="/images/imagegoodoffice.jpg" alt="Our Company" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}