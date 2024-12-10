// src/pages/EmployeeDetails.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeDetailsView from "../components/EmployeeDetailsView";
import UpdateEmployee from "../components/UpdateEmployee";

export default function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [dataset, setDataset] = useState({ areas: [], cargos: [] }); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeResponse = await fetch(`http://localhost:12348/empleados/${id}`);
        if (!employeeResponse.ok) throw new Error("Error al cargar los datos del empleado");
        const employeeData = await employeeResponse.json();
        setEmployee(employeeData);

        const areasResponse = await fetch("http://localhost:12348/cargos/areas");
        if (!areasResponse.ok) throw new Error("Error al cargar las áreas");
        const areasData = await areasResponse.json();

        const cargosResponse = await fetch("http://localhost:12348/cargos");
        if (!cargosResponse.ok) throw new Error("Error al cargar los cargos");
        const cargosData = await cargosResponse.json();

        const combinedDataset = {
          areas: areasData,
          cargos: cargosData,
        };

        setDataset(combinedDataset);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Cargando datos del empleado...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleImageUpdated = (newImageUrl) => {
    // Actualizar el employee con la nueva URL de imagen
    setEmployee((prev) => ({ ...prev, imagen: newImageUrl }));
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        Regresar al Dashboard
      </button>

      <h1 className="text-3xl font-bold mb-4">Detalles del Empleado</h1>
      {!isEditing ? (
        <EmployeeDetailsView
          employee={employee}
          onEdit={() => setIsEditing(true)}
          onImageUpdated={handleImageUpdated}
        />
      ) : (
        <UpdateEmployee
          employee={employee}
          dataset={dataset}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedEmployee) => {
            setEmployee(updatedEmployee);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
}