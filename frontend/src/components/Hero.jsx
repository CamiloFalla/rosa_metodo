import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const colors = ["#0D284F", "#51a48a", "#0F3566", "#8fa3aa", "#0d3847"];
const baseStyles = [
  { top: "-180px", left: "20%" },
  { bottom: "-60px", left: "10%", height: "240px", width: "240px" },
  { top: "20px", right: "10%", height: "200px", width: "200px" },
  { top: "50px", left: "30%", height: "220px", width: "220px" },
  { right: "-30px", bottom: "-20px", height: "170px", width: "170px" },
];

export default function Hero() {
  const [animateKey, setAnimateKey] = useState(0);
  const [randomizedItems, setRandomizedItems] = useState(generateRandomItems());

  const handleMouseEnter = () => {
    setAnimateKey((prevKey) => prevKey + 1);
    setRandomizedItems(generateRandomItems()); // Genera nuevos estilos aleatorios
  };

  
  const [isContactOpen, setIsContactOpen] = useState(false);

  

  const toggleContactModal = () => {
    setIsContactOpen((prev) => !prev);
  };


  // Genera estilos aleatorios y amplía el rango de dispersión
  function generateRandomItems() {
    return baseStyles.map((baseStyle) => ({
      style: {
        ...baseStyle,
        top: baseStyle.top || `${Math.random() * 200 - 100 + 60}px`,
        left: baseStyle.left || `${Math.random() * 200 - 100}px`,
        right: baseStyle.right || `${Math.random() * 200 - 100}px`,
        bottom: baseStyle.bottom || `${Math.random() * 200 - 100 + 60}px`,
        width: `${Math.random() * 100 + 80}px`,
        height: `${Math.random() * 100 + 80}px`,
      },
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }


  return (
    <section
      className="relative bg-gray-100 h-screen flex flex-col justify-center overflow-hidden px-4"
      onMouseEnter={handleMouseEnter}
    >
      {/* Fila principal con dos columnas */}
      <div className="flex w-full max-w-7xl mx-auto">
        {/* Columna 1: Frases y Botones */}
        <div className="w-full lg:w-7/10 p-10 flex flex-col items-center lg:items-start">
          <motion.div
            key={animateKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-center lg:text-left max-w-3xl leading-tight">
              Evaluando puesto de trabajo entregando Análisis{" "}
              <span className="hover:text-blue-300 hover:animate-pulse transition duration-300">
                Metodo Rosa
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mb-6 text-blue text-center lg:text-left">
              Especialista para potenciar la gestión empresarial
            </h2>

            {/* Botones centrados */}
            <div className="flex justify-center lg:justify-center space-x-4 mt-6">
              <button
                onClick={toggleContactModal}
                className="bg-earth-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Contactenos
              </ button>
              <a
                href="/solutions"
                className="bg-earth-secondary text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Funcionalidades
              </a>
            </div>
          </motion.div>
        </div>

        {/* Columna 2: Bloques animados aleatorios */}
        <div className="relative w-full lg:w-3/10 flex justify-center" style={{ marginLeft: "100px", marginTop: "0px" }}>
          {randomizedItems.map((item, index) => (
            <motion.div
              key={`${animateKey}-${index}`}
              className="absolute rounded-lg"
              style={{
                backgroundColor: item.color,
                width: item.style.width,
                height: item.style.height,
                ...item.style,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      {/* Fila de Mensaje Final */}
      <div className="text-center mt-210 px-10 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700">
          Analisis de los puestos de trabajo de la mejor manera para garantizar que sus empleados esten muy cuiidados y siempre al dia en la mejor ergonomia para trabajar
        </p>
      </div>
      {/* Popup de Contact Us */}
      {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={toggleContactModal} />}
    </section>
  );
}