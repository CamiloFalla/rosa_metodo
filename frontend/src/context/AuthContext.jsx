// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula el estado de autenticación
  const [userRole, setUserRole] = useState("employee"); // Simula un rol por defecto
  const [user, setUser] = useState({
    email: "user@example.com",
    name: "John Doe",
  }); // Simula datos de usuario

  const login = async () => {
    // Simula el inicio de sesión
    console.log("Simulated login");
    setIsLoggedIn(true);
    setUserRole("admin");
    setUser({ email: "admin@example.com", name: "Admin User" });
  };

  const logout = async () => {
    // Simula el cierre de sesión
    console.log("Simulated logout");
    setIsLoggedIn(false);
    setUserRole(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        userRole,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};