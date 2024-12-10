// src/components/Header.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginModal from "./LoginModal";

export default function Header() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado del modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado del menú

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <header className="py-4 px-8 bg-orange-500 text-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/imagegoodoffice.jpg" alt="Logo" className="h-10 inline-block" />
            <span className="ml-2 font-bold">Proyecto Evaluar</span>
          </div>

          {/* Botón Hamburguesa */}
          <button
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Navegación */}
          <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
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
        </div>
      </header>

      {/* Modal de Inicio de Sesión */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
}