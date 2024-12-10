import React from "react";

export default function UpdateDataNoForeignKey({ formData, setFormData }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          value={formData.nombre || ""}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Apellidos:</label>
        <input
          type="text"
          value={formData.apellidos || ""}
          onChange={(e) =>
            setFormData({ ...formData, apellidos: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Fecha de Nacimiento:</label>
        <input
          type="date"
          value={formData.fecha_nacimiento || ""}
          onChange={(e) =>
            setFormData({ ...formData, fecha_nacimiento: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Fecha de Ingreso:</label>
        <input
          type="date"
          value={formData.fecha_ingreso || ""}
          onChange={(e) =>
            setFormData({ ...formData, fecha_ingreso: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) =>
            setFormData({ ...formData, apellidos: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-gray-700">Residencia:</label>
        <input
          type="text"
          value={formData.residencia || ""}
          onChange={(e) =>
            setFormData({ ...formData, apellidos: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Ciudad:</label>
        <input
          type="text"
          value={formData.ciudad_residencia || ""}
          onChange={(e) =>
            setFormData({ ...formData, apellidos: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Estrato:</label>
        <input
          type="number"
          value={formData.estrato || ""}
          onChange={(e) =>
            setFormData({ ...formData, apellidos: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
        />
      </div>
    </div>
  );
}