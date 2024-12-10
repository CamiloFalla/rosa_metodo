//components/IncludeCardEmployee.jsx
import { useState } from "react";

export function IncludeCardEmployee({ children, initevaluate, name, cargo }) {
  const [isevaluate, setisevaluate] = useState(initevaluate);

  const imgSrc = `/images/employee/${name}/${name}.jpg`; // Suponiendo una estructura de imágenes
  const text = isevaluate ? "Evaluado" : "Evaluar";

  const handleClick = () => {
    setisevaluate(!isevaluate);
  };

  return (
    <article className="include-card border rounded shadow p-4 bg-white">
      <header className="flex items-center">
        <img
          className="include-card-avatar w-16 h-16 rounded-full object-cover mr-4"
          alt={name}
          src={imgSrc}
          onError={(e) => (e.target.src = "/images/default-avatar.jpg")} // Imagen por defecto
        />
        <div className="include-card-info">
          <strong className="block text-lg font-semibold">{name}</strong>
          <span className="text-sm text-gray-500">{cargo}</span>
          <div>{children}</div>
        </div>
      </header>
      <aside className="mt-4">
        <button
          className={`${
            isevaluate ? "bg-green-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded transition duration-300`}
          onClick={handleClick}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}