// EmployeeImage.jsx
import React, { useState } from 'react';

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
        onError={() => setLoading(false)} // Si falla, dejar de mostrar "Cargando"
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
}