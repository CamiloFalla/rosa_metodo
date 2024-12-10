// src/components/Dashboard.jsx

import React from "react";
import { EmployeeList } from "./EmployeeList";
import AreaList from "./AreaList";
import PendingEvaluations from "./PendingEvaluations";

export default function Dashboard({ onLogout }) {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Panel de Control</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Cerrar Sesión
        </button>
      </header>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Bienvenido al Dashboard</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lista de Empleados</h3>
            <EmployeeList />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Áreas</h3>
            <AreaList />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Pendientes de Evaluación</h3>
            <PendingEvaluations />
          </div>
        </div>
      </section>
    </div>
  );
}