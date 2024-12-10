// src/components/EmployeeList.jsx

import { useEffect, useState } from "react";
import { IncludeCardEmployee } from "./IncludeCardEmployee";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:12348/empleados/");
        if (!response.ok) {
          throw new Error("Error al cargar empleados");
        }
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Cargando empleados...</p>;
  }

  if (error) {
    return <p>Error al cargar empleados: {error}</p>;
  }

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id_empleado} className="mb-4">
          <IncludeCardEmployee
            employeeId={employee.id_empleado}
            username={employee.username}
            initevaluate={employee.evaluado}
            name={`${employee.nombre} ${employee.apellidos}`}
            cargo={employee.cargo_nombre}
            area={employee.area_nombre}
            avatar={employee.imagen}
            onViewDetails={() => navigate(`/employee/${employee.id_empleado}`)}
          >
            {employee.area_nombre}
          </IncludeCardEmployee>
        </div>
      ))}
    </div>
  );
}