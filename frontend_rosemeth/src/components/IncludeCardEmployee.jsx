// src/components/IncludeCardEmployee.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import RosaMethodExam from "./RosaMethodExam";

export function IncludeCardEmployee({
  avatar,
  initevaluate,
  name,
  cargo,
  area,
  onViewDetails,
  employeeId,
  username,
}) {
  const [isevaluate, setisevaluate] = useState(initevaluate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imgesrc = avatar || `/images/employee/${name}/${name}.jpg`;
  const buttonText = isevaluate ? "Evaluado" : "Evaluar";

  const handleEvaluateComplete = () => {
    setisevaluate(true);
    setIsModalOpen(false);
  };

  return (
    <article className="border p-4 rounded shadow-md flex flex-col items-center bg-white">
      <img className="w-24 h-24 rounded-full object-cover mb-4" alt={name} src={imgesrc} />
      <div className="text-center mb-4">
        <strong className="block text-lg font-bold text-gray-800">{name}</strong>
        <span className="block text-sm text-gray-600">{area}</span>
        <span className="block text-sm font-medium text-gray-700">{cargo}</span>
      </div>
      <div className="flex gap-4 mt-2">
        <button
          className={`${
            isevaluate ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded`}
          onClick={() => !isevaluate && setIsModalOpen(true)}
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
      </div>
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

IncludeCardEmployee.propTypes = {
  avatar: PropTypes.string,
  initevaluate: PropTypes.bool,
  name: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func,
  employeeId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};