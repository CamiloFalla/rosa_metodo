import React, { useState } from 'react';
import Hero from './Hero.jsx';
import ContactModal from './ContactModal.jsx';

export default function MainContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactOpen(false);
  };

  return (
    <>

      <ContactModal isOpen={isContactOpen} onClose={handleCloseModal} />
      <Hero onContactClick={handleContactClick} />
      
    </>
  );
}