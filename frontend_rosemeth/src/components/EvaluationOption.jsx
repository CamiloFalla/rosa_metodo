// src/components/EvaluationOption.jsx

import PropTypes from "prop-types";

export default function EvaluationOption({ option, onSelect, selected, multiple = false }) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer ${
        selected ? "bg-green-200 border-green-500" : "hover:bg-gray-100"
      }`}
      onClick={onSelect}
    >
      <img src={option.image} alt={option.description} className="w-16 h-16 mb-2" />
      <p>{option.description}</p>
      {multiple && selected && <p className="text-sm text-green-600">Seleccionado</p>}
    </div>
  );
}

EvaluationOption.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  multiple: PropTypes.bool,
};