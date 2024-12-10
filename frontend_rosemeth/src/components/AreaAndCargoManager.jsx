import { useState } from "react";
import CargoList from "./CargoList";
import AddAreaOrCargo from "./AddAreaOrCargo";

export default function AreaAndCargoManager({
  areas,
  cargos,
  selectedArea,
  setSelectedArea,
  filteredCargos,
  setFilteredCargos,
  formData,
  setFormData,
}) {
  const [newCargo, setNewCargo] = useState("");

  const handleAreaChange = (areaId) => {
    setSelectedArea(areaId);
    setFilteredCargos(cargos.filter((cargo) => cargo.id_area === areaId));
    setFormData({ ...formData, id_area: areaId, id_cargo: "" });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700">Área:</label>
        <select
          value={selectedArea || ""}
          onChange={(e) => handleAreaChange(parseInt(e.target.value, 10))}
          className="w-full border rounded px-4 py-2"
        >
          <option value="">Seleccione un área</option>
          {areas.map((area) => (
            <option key={area.id_area} value={area.id_area}>
              {area.nombre}
            </option>
          ))}
        </select>
      </div>

      <CargoList
        cargos={filteredCargos}
        formData={formData}
        setFormData={setFormData}
        newCargo={newCargo}
        setNewCargo={setNewCargo}
      />

      <AddAreaOrCargo type="cargo" areaId={selectedArea} onNewItem={(newItem) => setFilteredCargos([...filteredCargos, newItem])} />
    </div>
  );
}