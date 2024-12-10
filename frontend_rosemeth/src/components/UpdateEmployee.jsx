import { useState, useEffect } from "react";
import UpdateDataNoForeignKey from "./UpdateDataNoForeignKey";
import UpdateDataForeign from "./UpdateDataForeign";

export default function UpdateEmployee({
  employee,
  dataset,
  onCancel,
  onSave,
}) {
  const [formData, setFormData] = useState(null);
  const [filteredCargos, setFilteredCargos] = useState([]);

  useEffect(() => {
    if (employee && dataset.areas.length > 0 && dataset.cargos.length > 0) {
      // Asegurar que formData no se vuelve a setear varias veces
      if (!formData) {
        // id_area ya viene en employee
        const initialFilteredCargos = dataset.cargos.filter(
          (c) => c.id_area === employee.id_area
        );

        setFormData({
          ...employee,
          fecha_nacimiento: employee.fecha_nacimiento.slice(0, 10),
          fecha_ingreso: employee.fecha_ingreso.slice(0, 10),
        });
        setFilteredCargos(initialFilteredCargos);
      }
    }
  }, [employee, dataset, formData]);

  const handleAreaChange = (id_area) => {
    setFormData((prev) => ({
      ...prev,
      id_area,
      id_cargo: ""
    }));
    const newFilteredCargos = dataset.cargos.filter((c) => c.id_area === id_area);
    setFilteredCargos(newFilteredCargos);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData) return;

    // Comparar con employee original
    const changedFields = {};
    for (const key in formData) {
      if (formData[key] !== employee[key]) {
        changedFields[key] = formData[key];
      }
    }

    if (Object.keys(changedFields).length === 0) {
      onSave(employee);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:12348/empleados/${employee.id_empleado}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(changedFields),
        }
      );
      if (!response.ok) throw new Error("Error al actualizar el empleado");
      onSave({ ...employee, ...changedFields });
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!formData) return <div>Cargando datos...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <UpdateDataNoForeignKey formData={formData} setFormData={setFormData} />
      <UpdateDataForeign
        formData={formData}
        setFormData={setFormData}
        areas={dataset.areas}
        cargos={filteredCargos}
        onAreaChange={handleAreaChange}
      />
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Guardar Cambios
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}