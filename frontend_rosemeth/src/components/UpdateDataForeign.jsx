// src/components/UpdateDataForeign.jsx

import PropTypes from "prop-types";

export default function UpdateDataForeign({ formData, setFormData, areas, cargos, onAreaChange }) {
  return (
    <div className="space-y-4">
      {/* Área */}
      <div>
        <label className="block text-gray-700 text-sm font-medium">Área:</label>
        <select
          value={formData.id_area || ""}
          onChange={(e) => {
            const selectedArea = parseInt(e.target.value, 10);
            if (selectedArea) {
              onAreaChange(selectedArea);
            }
          }}
          className="w-full border rounded px-4 py-2 text-sm"
        >
          <option value="">Seleccione un área</option>
          {areas.map((area) => (
            <option key={area.id_area} value={area.id_area}>
              {area.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Cargo */}
      <div>
        <label className="block text-gray-700 text-sm font-medium">Cargo:</label>
        <select
          value={formData.id_cargo || ""}
          onChange={(e) =>
            setFormData({ ...formData, id_cargo: parseInt(e.target.value, 10) })
          }
          className="w-full border rounded px-4 py-2 text-sm"
        >
          <option value="">Seleccione un cargo</option>
          {cargos.map((cargo) => (
            <option key={cargo.id_cargo} value={cargo.id_cargo}>
              {cargo.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Botón para agregar un nuevo cargo (opcional) */}
      <div>
        <button
          type="button"
          onClick={() => console.log("Agregar nuevo cargo")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Agregar nuevo cargo
        </button>
      </div>
    </div>
  );
}

UpdateDataForeign.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id_area: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
  cargos: PropTypes.arrayOf(
    PropTypes.shape({
      id_cargo: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAreaChange: PropTypes.func.isRequired,
};