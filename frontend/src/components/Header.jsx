// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LanguageSelector from './LanguageSelector.jsx';
import ContactModal from './ContactModal.jsx';
import LoginModal from './LoginModal.jsx';

export default function Header() {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] =useState(false);
    
    const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);
    const toggleContactModal = () => setIsContactOpen(!isContactOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);


  return (
    <>
      <header className="py-4 px-8 flex items-center fixed top-0 w-full bg-orange-500 text-white shadow-md z-50">
        {/* Logo a la izquierda */}
        <div className="flex flex-grow-0">
          <img src="/images/imagegoodoffice.jpg" alt="Logo" className="h-10" />
          <p>Evalualarosa</p>
        </div>

        {/* Menú en el centro para pantallas grandes */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-white font-medium text-earth-primary font-merriweather">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about-us">Sobre Nosotros</a></li>
            <li className="relative">
              <button onClick={toggleSolutions} className="focus:outline-none">
                Funcionalidades
              </button>
              {isSolutionsOpen && (
                <ul className="absolute left-0 bg-orange-800 shadow-md mt-2 py-2 w-56 rounded-lg text-left">
                  <li><a href="/solutions/usuarios" className="block px-4 py-2 hover:bg-gray-100">Usuarios</a></li>
                  <li><a href="/solutions/Areas" className="block px-4 py-2 hover:bg-gray-100">Analisis por areas</a></li>
                  <li><a href="/solutions/indicators" className="block px-4 py-2 hover:bg-gray-100">Indicadores</a></li>
                  <li><a href="/solutions/evaluation" className="block px-4 py-2 hover:bg-gray-100">Inicia Evaluación</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Menú a la derecha en pantallas grandes */}
        <div className="hidden lg:flex items-center space-x-4">
            {/* Mostrar botones diferentes según el estado de autenticación */}
            <button onClick={() => { toggleContactModal(); toggleMobileMenu(); }} className="text-earth-primary font-merriweather font-medium focus:outline-none">
                Contactenos
            </button>
            {!isLoggedIn ? (
            <button onClick={login} className="text-white font-medium focus:outline-none">
                Iniciar Sesión
            </button>
            ) : (
            <button onClick={logout} className="text-white font-medium focus:outline-none">
                Cerrar Sesión
            </button>
            )}
            <LanguageSelector />
        </div>

        {/* Menú hamburguesa para pantallas móviles a la derecha */}
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMobileMenu} className="text-earth-primary font-merriweather font-medium focus:outline-none">
            ☰
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40 p-4">
          <ul className="flex flex-col space-y-4 text-black font-medium text-earth-primary font-merriweather">
            <li><a href="/" onClick={toggleMobileMenu}>Inicio</a></li>
            <li><a href="/about-us" onClick={toggleMobileMenu}>Contactenos</a></li>
            <li>
              <button onClick={toggleSolutions} className="focus:outline-none">
                Funcionalidades
              </button>
              {isSolutionsOpen && (
                <ul className="bg-white shadow-md mt-2 py-2 w-full rounded-lg text-left">
                  <li><a href="/solutions/usuarios" className="block px-4 py-2 hover:bg-gray-100">Usuarios</a></li>
                  <li><a href="/solutions/Areas" className="block px-4 py-2 hover:bg-gray-100">Analisis por areas</a></li>
                  <li><a href="/solutions/indicators" className="block px-4 py-2 hover:bg-gray-100">Indicadores</a></li>
                  <li><a href="/solutions/evaluation" className="block px-4 py-2 hover:bg-gray-100">Inicia Evaluación</a></li>
                  
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => { toggleContactModal(); toggleMobileMenu(); }} className="text-earth-primary font-merriweather font-medium focus:outline-none">
                Contactenos
              </button>
            </li>
          </ul>
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      )}

      {/* Popup de Contact Us */}
      {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={toggleContactModal} />}
      {/* Popup de Contact Us */}
      {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={toggleLoginModal} />}
    </>
  );
}