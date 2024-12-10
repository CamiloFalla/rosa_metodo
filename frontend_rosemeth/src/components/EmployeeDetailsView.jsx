// src/components/EmployeeDetailsView.jsx
import EmployeeImage from './EmployeeImage';
import EmployeeImageUpload from './EmployeeImageUpload';

export default function EmployeeDetailsView({ employee, onEdit, onImageUpdated }) {
  const handleImageUploaded = (newImageUrl) => {
    // Llamar a la función prop onImageUpdated para actualizar el estado en EmployeeDetails
    onImageUpdated(newImageUrl);
  };

  return (
    <div>
      <EmployeeImage employee={employee} />
      <p><strong>Nombre:</strong> {employee.nombre} {employee.apellidos}</p>
      <p><strong>Usuario:</strong> {employee.username}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Fecha de Nacimiento:</strong> {new Date(employee.fecha_nacimiento).toLocaleDateString()}</p>
      <p><strong>Fecha de Ingreso:</strong> {new Date(employee.fecha_ingreso).toLocaleDateString()}</p>
      <p><strong>Residencia:</strong> {employee.residencia}</p>
      <p><strong>Ciudad:</strong> {employee.ciudad_residencia}</p>
      <p><strong>Estrato:</strong> {employee.estrato}</p>
      <p><strong>Cargo:</strong> {employee.cargo_nombre}</p>
      <p><strong>Área:</strong> {employee.area_nombre}</p>
      <p><strong>Activo:</strong> {employee.activo ? "Sí" : "No"}</p>

      <button
        onClick={onEdit}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Actualizar Datos
      </button>

      {/* Componente para subir imagen */}
      <EmployeeImageUpload employee={employee} onImageUploaded={handleImageUploaded} />
    </div>
  );
}