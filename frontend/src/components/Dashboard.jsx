// src/components/Dashboard.jsx

import React from 'react';
import { EmployeeList } from './EmployeeList'; 
import AreaList from '../components/AreaList';
import PendingEvaluations from '../components/PendingEvaluations';
import RosaMethodExam from '../components/RosaMethodExam';

export default function Dashboard({ onLogout }) {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
        <h1>Panel de Control</h1>
        <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">Cerrar Sesión</button>
      </header>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Bienvenido al Dashboard</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <EmployeeList />
          <AreaList />
          <PendingEvaluations />
        </div>
        <div className="text-center mt-10">
          <RosaMethodExam />
        </div>
      </section>
    </div>
  );
}