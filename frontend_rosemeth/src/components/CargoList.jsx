export default function CargoList({ cargos, formData, setFormData, newCargo, setNewCargo }) {
  return (
    <div>
      <label className="block text-gray-700">Cargo:</label>
      <select
        value={formData.id_cargo || ""}
        onChange={(e) => setFormData({ ...formData, id_cargo: parseInt(e.target.value, 10) })}
        className="w-full border rounded px-4 py-2"
      >
        <option value="">Seleccione un cargo</option>
        {cargos.map((cargo) => (
          <option key={cargo.id_cargo} value={cargo.id_cargo}>
            {cargo.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}