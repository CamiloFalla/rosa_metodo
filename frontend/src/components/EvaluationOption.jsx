// EvaluationOption.jsx
import React from 'react';

export default function EvaluationOption({ option, onSelect, selected, multiple = false }) {
  return (
    <div
      onClick={onSelect}
      className={`border p-4 rounded-lg cursor-pointer transition ${
        selected ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
      } ${!multiple && 'hover:bg-gray-100'}`}
    >
      <img src={option.image} alt={option.description} className="w-full h-32 object-cover rounded-md mb-2" />
      <p className="text-sm font-medium">{option.description}</p>
    </div>
  );
}