// src/components/MainComponent.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Hero from './Hero';
import MainContent from './MainContent';
import Dashboard from './Dashboard';

export default function MainComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <Hero />
          <MainContent />
          {/* Puedes incluir el botón o enlace para iniciar sesión */}
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}