// src/components/App.jsx
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import MainComponent from './MainComponent';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <MainComponent />
      <Footer />
    </AuthProvider>
  );
}