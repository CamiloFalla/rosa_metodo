import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useContext(AuthContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
        <button
          onClick={() => {
            login(); // Simula el inicio de sesión
            onClose(); // Cierra el modal
          }}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}