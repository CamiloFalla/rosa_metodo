// RosaMethodExam.jsx
import React, { useState } from 'react';
import EvaluationOption from './EvaluationOption';

const categories = {
  A: {
    name: "Silla de Trabajo",
    subcategories: [
      {
        id: "A1",
        name: "Altura del Asiento",
        uniqueOptions: [
          { id: "A1-1", description: "Opción 1", image: "/images/rosaimages/silladetrabajo/alturaasiento/puntuacioninicial1.png" },
          { id: "A1-2", description: "Opción 2", image: "/images/rosaimages/silladetrabajo/alturaasiento/puntuacioniniciala2.png" },
          { id: "A1-3", description: "Opción 3", image: "/images/rosaimages/silladetrabajo/alturaasiento/puntuacioninicialb2.png" },
          { id: "A1-4", description: "Opción 4", image: "/images/rosaimages/silladetrabajo/alturaasiento/puntuacioninicial3.png" }
        ],
        additionalOptions: [
          { id: "A1-add1", description: "Adicional 1", image: "/images/rosaimages/silladetrabajo/alturaasiento/criterioadicional1+.png" },
          { id: "A1-add2", description: "Adicional 2", image: "/images/rosaimages/silladetrabajo/alturaasiento/criterioadicional2+.png" }
        ]
      },
      {
        id: "A2",
        name: "Profundidad del Asiento",
        uniqueOptions: [
          { id: "A2-1", description: "Opción 1", image: "/images/rosaimages/silladetrabajo/profundidadasiento/puntuacioninicial1.png" },
          { id: "A2-2", description: "Opción 2", image: "/images/rosaimages/silladetrabajo/profundidadasiento/puntuacioniniciala2.png" },
          { id: "A2-3", description: "Opción 3", image: "/images/rosaimages/silladetrabajo/profundidadasiento/puntuacioninicialb2.png" }
        ],
        additionalOptions: [
          { id: "A2-add1", description: "Adicional 1", image: "/images/rosaimages/silladetrabajo/profundidadasiento/criterioadicional1+.png" }
        ]
      },
      {
        id: "A3",
        name: "Reposabrazos",
        uniqueOptions: [
          { id: "A3-1", description: "Opción 1", image: "/images/rosaimages/silladetrabajo/reposabrazos/puntuacioninicial1.png" },
          { id: "A3-2", description: "Opción 2", image: "/images/rosaimages/silladetrabajo/reposabrazos/puntuacioninicial2.png" }
        ],
        additionalOptions: [
          { id: "A3-add1", description: "Adicional 1", image: "/images/rosaimages/silladetrabajo/reposabrazos/criterioadicional1+.png" },
          { id: "A3-add1", description: "Adicional 2", image: "/images/rosaimages/silladetrabajo/reposabrazos/criterioadicional2+.png" },
          { id: "A3-add2", description: "Adicional 3", image: "/images/rosaimages/silladetrabajo/reposabrazos/criterioadicional3+.png" }
        ]
      },
      {
        id: "A4",
        name: "Respaldo",
        uniqueOptions: [
          { id: "A4-1", description: "Opción 1", image: "/images/rosaimages/silladetrabajo/respaldo/puntuacioninicial1.png" },
          { id: "A4-2", description: "Opción 2", image: "/images/rosaimages/silladetrabajo/respaldo/puntuacioniniciala2.png" },
          { id: "A4-3", description: "Opción 3", image: "/images/rosaimages/silladetrabajo/respaldo/puntuacioninicialb2.png" },
          { id: "A4-4", description: "Opción 4", image: "/images/rosaimages/silladetrabajo/respaldo/puntuacioninicialc2.png" }
        ],
        additionalOptions: [
          { id: "A2-add1", description: "Adicional 1", image: "/images/rosaimages/silladetrabajo/respaldo/criterioadicional1+.png" },
          { id: "A2-add2", description: "Adicional 2", image: "/images/rosaimages/silladetrabajo/respaldo/criterioadicional2+.png" }
        ]
      },
    ]
  },
  B: {
    name: "Pantalla",
    subcategories: [
      {
        id: "B1",
        name: "Teléfono",
        uniqueOptions: [
          { id: "B1-1", description: "Opción 1", image: "/images/rosaimages/pantalla/telefono/puntuacioninicial1.png" },
          { id: "B1-2", description: "Opción 2", image: "/images/rosaimages/pantalla/telefono/puntuacioninicial2.png" }
        ],
        additionalOptions: [
          { id: "B1-add1", description: "Adicional 1", image: "/images/rosaimages/pantalla/telefono/criterioadicional1++.png" },
          { id: "B1-add2", description: "Adicional 2", image: "/images/rosaimages/pantalla/telefono/criterioadicional2+.png" },
          { id: "B1-add3", description: "Adicional 3", image: "/images/rosaimages/pantalla/telefono/criterioadicional3-.png" },
          { id: "B1-add4", description: "Adicional 4", image: "/images/rosaimages/pantalla/telefono/criterioadicional4+.png" }
        ]
      },
      {
        id: "B2",
        name: "Pantalla",
        uniqueOptions: [
          { id: "B2-1", description: "Opción 1", image: "/images/rosaimages/pantalla/pantalla/puntuacioninicial1.png" },
          { id: "B2-2", description: "Opción 2", image: "/images/rosaimages/pantalla/pantalla/puntuacioninicial2.png" },
          { id: "B2-3", description: "Opción 3", image: "/images/rosaimages/pantalla/pantalla/puntuacioninicial3.png" }
        ],
        additionalOptions: [
          { id: "B2-add1", description: "Adicional 1", image: "/images/rosaimages/pantalla/pantalla/criterioadicional1+.png" },
          { id: "B2-add2", description: "Adicional 2", image: "/images/rosaimages/pantalla/pantalla/criterioadicional2+.png" },
          { id: "B2-add3", description: "Adicional 3", image: "/images/rosaimages/pantalla/pantalla/criterioadicional3+.png" },
          { id: "B2-add4", description: "Adicional 4", image: "/images/rosaimages/pantalla/pantalla/criterioadicional4+.png" },
          { id: "B2-add5", description: "Adicional 5", image: "/images/rosaimages/pantalla/pantalla/criterioadicional5+.png" },
          { id: "B2-add6", description: "Adicional 6", image: "/images/rosaimages/pantalla/pantalla/criterioadicional6-.png" }
        ]
      },
      // Añadir otras subcategorías de "Pantalla"
    ]
  },
  // Añadir categoría C: Teclado y Ratón
  C: {
    name: "Teclado y Ratón",
    subcategories: [
      {
        id: "C1",
        name: "Ratón",
        uniqueOptions: [
          { id: "C1-1", description: "Opción 1", image: "/images/rosaimages/tecladoyraton/raton/puntuacioninicial1.png" },
          { id: "C1-2", description: "Opción 2", image: "/images/rosaimages/tecladoyraton/raton/puntuacioninicial2.png" }
        ],
        additionalOptions: [
          { id: "C1-add1", description: "Adicional 1", image: "/images/rosaimages/tecladoyraton/raton/criterioadicional1+.png" },
          { id: "C1-add2", description: "Adicional 2", image: "/images/rosaimages/tecladoyraton/raton/criterioadicional2++.png" },
          { id: "C1-add3", description: "Adicional 3", image: "/images/rosaimages/tecladoyraton/raton/criterioadicional3+.png" },
          { id: "C1-add4", description: "Adicional 4", image: "/images/rosaimages/tecladoyraton/raton/criterioadicional4-.png" },
          { id: "C1-add5", description: "Adicional 5", image: "/images/rosaimages/tecladoyraton/raton/criterioadicional5+.png" }
        ]
      },
      {
        id: "C2",
        name: "Teclado",
        uniqueOptions: [
          { id: "C2-1", description: "Opción 1", image: "/images/rosaimages/tecladoyraton/teclado/puntuacioninicial1.png" },
          { id: "C2-2", description: "Opción 2", image: "/images/rosaimages/tecladoyraton/teclado/puntuacioninicial2.png" }
        ],
        additionalOptions: [
          { id: "C2-add1", description: "Adicional 1", image: "/images/rosaimages/tecladoyraton/teclado/criterioadicional1+.png" },
          { id: "C2-add2", description: "Adicional 2", image: "/images/rosaimages/tecladoyraton/teclado/criterioadicional2+.png" },
          { id: "C2-add3", description: "Adicional 3", image: "/images/rosaimages/tecladoyraton/teclado/criterioadicional3+.png" },
          { id: "C2-add4", description: "Adicional 4", image: "/images/rosaimages/tecladoyraton/teclado/criterioadicional4+.png" },
          { id: "C2-add5", description: "Adicional 5", image: "/images/rosaimages/tecladoyraton/teclado/criterioadicional5-.png" },
          { id: "C2-add6", description: "Adicional 6", image: "/images/rosaimages/tecladoyraton/teclado/criterioaidicional6+.png" }
        ]
      },
      // Añadir otras subcategorías de "Pantalla"
    ]
  },
};

export default function RosaMethodExam() {
  const [currentCategory, setCurrentCategory] = useState("A");
  const [currentSubcategoryIndex, setCurrentSubcategoryIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [evidence, setEvidence] = useState(null);

  const handleOptionSelect = (subCategoryId, optionId, isAdditional = false) => {
    setResponses((prev) => ({
      ...prev,
      [subCategoryId]: {
        ...prev[subCategoryId],
        [isAdditional ? "additional" : "unique"]: optionId
      }
    }));
  };

  const handleNext = () => {
    const subcategories = categories[currentCategory].subcategories;
    if (currentSubcategoryIndex < subcategories.length - 1) {
      setCurrentSubcategoryIndex(currentSubcategoryIndex + 1);
    } else {
      // Mover a la siguiente categoría o terminar el examen
    }
  };

  const handleEvidenceUpload = (event) => {
    setEvidence(event.target.files[0]);
  };

  const currentSubcategory = categories[currentCategory].subcategories[currentSubcategoryIndex];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Método Rosa - Evaluación</h1>
      <h2 className="text-xl mb-2">{categories[currentCategory].name}</h2>
      <h3 className="text-lg mb-4">{currentSubcategory.name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Opciones Únicas</h4>
          {currentSubcategory.uniqueOptions.map((option) => (
            <EvaluationOption
              key={option.id}
              option={option}
              onSelect={() => handleOptionSelect(currentSubcategory.id, option.id)}
              selected={responses[currentSubcategory.id]?.unique === option.id}
            />
          ))}
        </div>

        <div>
          <h4 className="font-semibold mb-2">Opciones Adicionales</h4>
          {currentSubcategory.additionalOptions.map((option) => (
            <EvaluationOption
              key={option.id}
              option={option}
              onSelect={() => handleOptionSelect(currentSubcategory.id, option.id, true)}
              selected={responses[currentSubcategory.id]?.additional?.includes(option.id)}
              multiple={true}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-2 font-semibold">Subir evidencia</label>
        <input type="file" onChange={handleEvidenceUpload} />
        {evidence && <p className="text-sm mt-2">Archivo cargado: {evidence.name}</p>}
      </div>

      <button
        onClick={handleNext}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Siguiente
      </button>
    </div>
  );
}