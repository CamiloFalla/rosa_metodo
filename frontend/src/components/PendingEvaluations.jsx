// src/components/PendingEvaluations.jsx

import React from 'react';
import { IncludeCardEmployee } from './IncludeCardEmployee';

export function PendingEvaluations() {
  const employees = [
    { iduniqemp: 'emp1-cmp', name: 'employee1', cargo: 'Gerente Comercial', area: 'Comercial', initevaluate: true },
    { iduniqemp: 'emp2-cmp', name: 'employee2', cargo: 'Gerente Operaciones', area: 'Operaciones', initevaluate: true },
    { iduniqemp: 'emp3-cmp', name: 'employee3', cargo: 'Gerente Financiero', area: 'Contabilidad', initevaluate: false },
    { iduniqemp: 'emp4-cmp', name: 'employee4', cargo: 'Gerente RRHH', area: 'Talento Humano', initevaluate: true },
    { name: 'employee5', cargo: 'Gerente General', area: 'Comercial', initevaluate: true },
    { iduniqemp: 'emp6-cmp', name: 'employee6', cargo: 'Jefe Logistico', area: 'Operaciones', initevaluate: true },
    { iduniqemp: 'emp7-cmp', name: 'employee7', cargo: 'Profesional Tecnologia', area: 'Tecnología', initevaluate: false },
    { iduniqemp: 'emp8-cmp', name: 'employee8', cargo: 'Lider de Equipo Técnico', area: 'Operaciones', initevaluate: false },
    { iduniqemp: 'emp9-cmp', name: 'employee9', cargo: 'Ingeniero Comercial', area: 'Operaciones', initevaluate: false },
  ];

  // Filtrar empleados con evaluación pendiente
  const pendingEmployees = employees.filter(employee => employee.initevaluate);

  return (
    <div className="pending-evaluations">
      <h3 className="text-2xl font-semibold mb-6">Empleados con Evaluaciones Pendientes</h3>
      {pendingEmployees.length > 0 ? (
        <div className="space-y-4">
          {pendingEmployees.map(({ iduniqemp, name, cargo, area }) => (
            <IncludeCardEmployee
              key={iduniqemp || name} // Fallback en caso de que iduniqemp no esté presente
              name={name}
              cargo={cargo}
            >
              {area}
            </IncludeCardEmployee>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No hay empleados pendientes de evaluación.</p>
      )}
    </div>
  );
}

export default PendingEvaluations;