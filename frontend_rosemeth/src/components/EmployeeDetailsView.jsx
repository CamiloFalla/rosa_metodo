// src/components/EmployeeDetailsView.jsx
import PropTypes from "prop-types";
import EmployeeImage from "./EmployeeImage";
import EmployeeImageUpload from "./EmployeeImageUpload";

export default function EmployeeDetailsView({ employee, onEdit, onImageUpdated }) {
  const handleImageUploaded = (newImageUrl) => {
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

      <EmployeeImageUpload employee={employee} onImageUploaded={handleImageUploaded} />
    </div>
  );
}

EmployeeDetailsView.propTypes = {
  employee: PropTypes.shape({
    id_empleado: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    fecha_nacimiento: PropTypes.string.isRequired,
    fecha_ingreso: PropTypes.string.isRequired,
    residencia: PropTypes.string.isRequired,
    ciudad_residencia: PropTypes.string.isRequired,
    estrato: PropTypes.number.isRequired,
    cargo_nombre: PropTypes.string.isRequired,
    area_nombre: PropTypes.string.isRequired,
    activo: PropTypes.bool.isRequired,
    imagen: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onImageUpdated: PropTypes.func.isRequired,
};