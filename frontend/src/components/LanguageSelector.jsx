import React, { useState } from 'react';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  // Idioma predeterminado es inglés
  const currentLanguage = 'en';

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botón que muestra el idioma predeterminado */}
      <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
        <img src={`/flags/${currentLanguage}.svg`} alt="English" className="h-5 w-5" />
        <span className="ml-2 uppercase">{currentLanguage}</span>
      </button>

      {/* Lista desplegable de idiomas */}
      {isOpen && (
        <ul className="absolute right-0 bg-orange-600 shadow-md mt-2 py-2 w-28 rounded-lg">
          <li>
            <button onClick={toggleDropdown} className="flex items-center px-4 py-2 hover:bg-gray-100">
              <img src="/flags/es.svg" alt="Español" className="h-5 w-5 mr-2" />-ES
            </button>
          </li>
          <li>
            <button onClick={toggleDropdown} className="flex items-center px-4 py-2 hover:bg-gray-100">
              <img src="/flags/fr.svg" alt="Français" className="h-5 w-5 mr-2" />-FR
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}