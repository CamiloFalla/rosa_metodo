// src/components/MainComponent.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Hero from "./Hero";
import MainContent from "./MainContent";
import Dashboard from "./Dashboard";

export default function MainComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn === undefined) {
    console.error("AuthContext is not providing isLoggedIn correctly.");
    return <div>Error: No se pudo determinar el estado de autenticación.</div>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <Hero />
          <MainContent />
        </>
      )}
    </div>
  );
}