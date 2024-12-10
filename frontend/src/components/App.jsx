// src/components/App.jsx
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";

function App() {
  return (
    <AuthProvider>
      <Header />
      <MainComponent />
      <Footer />
    </AuthProvider>
  );
}

export default App;