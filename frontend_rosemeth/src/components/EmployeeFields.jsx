export default function EmployeeFields({ formData, setFormData }) {
  return (
    <div className="space-y-4">
      {Object.keys(formData).map((key) => (
        !["id_area", "id_cargo"].includes(key) && (
          <div key={key}>
            <label className="block text-gray-700 capitalize">{key.replace("_", " ")}:</label>
            <input
              type={key.includes("fecha") ? "date" : key === "activo" ? "checkbox" : "text"}
              value={formData[key] || ""}
              checked={key === "activo" ? formData[key] : undefined}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [key]: key === "activo" ? e.target.checked : e.target.value,
                })
              }
              className="w-full border rounded px-4 py-2"
            />
          </div>
        )
      ))}
    </div>
  );
}