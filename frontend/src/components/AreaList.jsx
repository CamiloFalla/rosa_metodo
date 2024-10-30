// src/components/AreaList.jsx
import React from 'react';
import { IncludeCardEmployee } from './IncludeCardEmployee';
import { EditEmployee } from './EditEmployee';

export function AreaList() {
  const employees = [
    { iduniqemp: 'emp1-cmp', name: 'employee1', cargo: 'Gerente Comercial', area: 'Comercial', initevaluate: true },
    { iduniqemp: 'emp2-cmp', name: 'employee2', cargo: 'Gerente Operaciones', area: 'Operaciones', initvaluate: true },
    { iduniqemp: 'emp3-cmp', name: 'employee3', cargo: 'Gerente Financiero', area: 'Contabilidad', initevaluate: false },
    { iduniqemp: 'emp4-cmp', name: 'employee4', cargo: 'Gerente RRHH', area: 'Talento Humano', initevaluate: true },
    { name: 'employee5', cargo: 'Gerente General', area: 'Comercial', initevaluate: true },
    { iduniqemp: 'emp6-cmp', name: 'employee6', cargo: 'Jefe Logistico', area: 'Operaciones', initevaluate: true },
    { iduniqemp: 'emp7-cmp', name: 'employee7', cargo: 'Profesional Tecnologia', area: 'Tecnología', initevaluate: false },
    { iduniqemp: 'emp8-cmp', name: 'employee8', cargo: 'Lider de Equipo Técnico', area: 'Operaciones', initevaluate: false },
    { iduniqemp: 'emp9-cmp', name: 'employee9', cargo: 'Ingeniero Comercial', area: 'Operaciones', initevaluate: false },
  ];

  // Agrupar empleados por área
  const employeesByArea = employees.reduce((acc, employee) => {
    const area = employee.area || 'Unknown';
    if (!acc[area]) {
      acc[area] = [];
    }
    acc[area].push(employee);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(employeesByArea).map((area) => (
        <div key={area} className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{area}</h3>
          <div className="space-y-4">
            {employeesByArea[area].map(({ iduniqemp, name, cargo, initevaluate }) => (
              <IncludeCardEmployee
                key={iduniqemp || name} // Fallback en caso de que iduniqemp no esté presente
                initevaluate={initevaluate}
                name={name}
                cargo={cargo}
              />
            ))}
          </div>
        </div>
      ))}
      <EditEmployee />
    </div>
  );
}

export default AreaList;