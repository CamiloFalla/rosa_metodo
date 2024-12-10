// src/pages/Dashboard.jsx

import React from "react";
import EmployeeList from "../components/EmployeeList";

export default function Dashboard() {
  return (
    <div>
      <header className="py-4 px-8 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Lista de Empleados</h2>
        <EmployeeList />
      </main>
    </div>
  );
}