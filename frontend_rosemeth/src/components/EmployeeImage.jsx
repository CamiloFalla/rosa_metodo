// EmployeeImage.jsx
import PropTypes from "prop-types";
import { useState } from "react";

export default function EmployeeImage({ employee }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      {loading && <div>Cargando imagen...</div>}
      <img
        src={employee.imagen || "/default-image.png"}
        alt={`${employee.nombre} ${employee.apellidos}`}
        className="w-48 h-48 rounded-full"
        onLoad={handleImageLoad}
        onError={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
}

EmployeeImage.propTypes = {
  employee: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
  }).isRequired,
};