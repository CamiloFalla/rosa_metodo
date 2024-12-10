import { useState } from "react";

export default function AddAreaOrCargo({ type, areaId, onNewItem }) {
  const [newItem, setNewItem] = useState("");

  const handleAdd = async () => {
    try {
      const url = type === "area" ? "http://localhost:12348/cargos/areas" : "http://localhost:12348/cargos";
      const body = type === "area" ? { nombre: newItem, descripcion: "" } : { nombre: newItem, id_area: areaId };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("Error al agregar nuevo elemento");
      const createdItem = await response.json();
      onNewItem(createdItem);
      setNewItem("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="mt-2 flex gap-2">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder={`Agregar nuevo ${type}`}
        className="w-full border rounded px-4 py-2"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar {type === "area" ? "Área" : "Cargo"}
      </button>
    </div>
  );
}