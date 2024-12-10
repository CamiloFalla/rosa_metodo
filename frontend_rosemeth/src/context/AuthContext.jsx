import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula autenticación
  const [user, setUser] = useState({
    email: 'user@example.com',
    name: 'John Doe',
  }); // Datos simulados de usuario

  const login = () => {
    console.log('Simulated login');
    setIsLoggedIn(true);
    setUser({ email: 'admin@example.com', name: 'Admin User' });
  };

  const logout = () => {
    console.log('Simulated logout');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};