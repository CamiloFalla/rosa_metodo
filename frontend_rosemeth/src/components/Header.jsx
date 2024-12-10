// src/components/Header.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginModal from "./LoginModal";

export default function Header() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado del modal

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <header className="py-4 px-8 flex justify-between bg-orange-500 text-white">
        <div>
          <img src="/images/imagegoodoffice.jpg" alt="Logo" className="h-10 inline-block" />
          <span className="ml-2 font-bold">EvaluaLaRosa</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
            {isLoggedIn ? (
              <>
                <li>Bienvenido, {user.name}</li>
                <li>
                  <button onClick={logout} className="text-red-500">
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={openLoginModal} className="text-green-500">
                  Iniciar Sesión
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Modal de Inicio de Sesión */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
}