// src/components/EmployeeImageUpload.jsx
import PropTypes from "prop-types";
import { useState } from "react";

export default function EmployeeImageUpload({ employee, onImageUploaded }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("No se seleccionó ningún archivo.");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        `http://localhost:12348/empleados/${employee.id_empleado}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Error al subir la imagen");

      const data = await response.json();
      onImageUploaded(data.imageUrl);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al subir la imagen.");
    }
  };

  return (
    <div className="my-4">
      <h3 className="font-bold">Cambiar Imagen</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-2"
      >
        Subir
      </button>
    </div>
  );
}

EmployeeImageUpload.propTypes = {
  employee: PropTypes.shape({
    id_empleado: PropTypes.number.isRequired,
  }).isRequired,
  onImageUploaded: PropTypes.func.isRequired,
};