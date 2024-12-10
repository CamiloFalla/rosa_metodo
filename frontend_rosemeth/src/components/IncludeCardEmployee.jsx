// src/components/IncludeCardEmployee.jsx

import { useState } from "react";
import RosaMethodExam from "./RosaMethodExam";

export function IncludeCardEmployee({ children, avatar, initevaluate, name, cargo, area, onViewDetails, employeeId, username }) {
  const [isevaluate, setisevaluate] = useState(initevaluate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imgesrc = avatar || `/images/employee/${name}/${name}.jpg`;
  const buttonText = isevaluate ? "Evaluado" : "Evaluar";
  const buttonClassName = isevaluate
    ? "include-card-button is-evaluated bg-green-500 text-white px-4 py-2 rounded cursor-not-allowed"
    : "include-card-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";

  const handleEvaluateComplete = () => {
    setisevaluate(true);
    setIsModalOpen(false);
  };

  return (
    <article className="include-card border p-4 rounded shadow-md flex items-center justify-between mb-4">
      <header className="include-person-total flex items-center gap-6">
        <img className="include-card-avatar w-16 h-16 rounded-full" alt={name} src={imgesrc} />
        <div className="include-card-info flex flex-col gap-2">
          <strong className="text-lg font-bold text-gray-800">{name}</strong>
          <span className="text-sm text-gray-600">{area}</span>
          <span className="include-card-rol text-sm font-medium text-gray-700">{cargo}</span>
        </div>
      </header>
      <aside className="flex flex-col items-end gap-2">
        <button
          className={buttonClassName}
          onClick={() => {
            if (!isevaluate) setIsModalOpen(true);
          }}
          disabled={isevaluate}
        >
          {buttonText}
        </button>
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Ver Detalles
          </button>
        )}
      </aside>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <RosaMethodExam
            onClose={() => setIsModalOpen(false)}
            onEvaluateComplete={handleEvaluateComplete}
            employeeId={employeeId}
            username={username}
          />
        </div>
      )}
    </article>
  );
}