// src/pages/EmployeeDetails.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeDetailsView from "../components/EmployeeDetailsView";
import UpdateEmployee from "../components/UpdateEmployee";
import RosaEvaluationView from "../components/RosaEvaluationView";

export default function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [dataset, setDataset] = useState({ areas: [], cargos: [] }); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvaluationId, setCurrentEvaluationId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Cargar datos de empleado
        const employeeResponse = await fetch(`http://localhost:12348/empleados/${id}`);
        if (!employeeResponse.ok) throw new Error("Error al cargar los datos del empleado");
        const employeeData = await employeeResponse.json();
        setEmployee(employeeData);

        // Cargar áreas
        const areasResponse = await fetch("http://localhost:12348/cargos/areas");
        if (!areasResponse.ok) throw new Error("Error al cargar las áreas");
        const areasData = await areasResponse.json();

        // Cargar cargos
        const cargosResponse = await fetch("http://localhost:12348/cargos");
        if (!cargosResponse.ok) throw new Error("Error al cargar los cargos");
        const cargosData = await cargosResponse.json();

        const combinedDataset = {
          areas: areasData,
          cargos: cargosData,
        };

        setDataset(combinedDataset);

        // Intentar obtener la evaluación del año en curso
        const evalResponse = await fetch(`http://localhost:12348/metodorosa/${id}/current`);
        if (evalResponse.ok) {
          const evalData = await evalResponse.json();
          setCurrentEvaluationId(evalData.id_evaluacion);
        } else {
          // Si no hay evaluación, no es un error crítico, solo no mostramos nada
          console.log("No se encuentra evaluación disponible para este año");
        }

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

      {currentEvaluationId && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Evaluación ROSA Actual</h2>
          <RosaEvaluationView id_evaluacion={currentEvaluationId} />
        </div>
      )}
    </div>
  );
}