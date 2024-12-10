// src/components/EvaluationOption.jsx
import React from 'react';

export default function EvaluationOption({ option, onSelect, selected, multiple = false }) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer ${
        selected ? 'bg-green-200 border-green-500' : 'hover:bg-gray-100'
      }`}
      onClick={onSelect}
    >
      <img src={option.image} alt={option.description} className="w-16 h-16 mb-2" />
      <p>{option.description}</p>
      {multiple && selected && <p className="text-sm text-green-600">Seleccionado</p>}
    </div>
  );
}