// src/components/RosaEvaluationView.jsx

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function RosaEvaluationView({ id_evaluacion }) {
  const [evaluation, setEvaluation] = useState(null);

  useEffect(() => {
    const fetchEvaluation = async () => {
      const res = await fetch(`http://localhost:12348/metodorosa/evaluation/${id_evaluacion}`);
      if (!res.ok) {
        console.error("Error al cargar la evaluación");
        return;
      }
      const data = await res.json();
      setEvaluation(data);
    };
    fetchEvaluation();
  }, [id_evaluacion]);

  if (!evaluation) return <p>Cargando...</p>;

  const responses = JSON.parse(evaluation.respuestas_json);

  return (
    <div>
      <h1>Evaluación {evaluation.id_evaluacion}</h1>
      <p>Calificación Final: {evaluation.calificacion}</p>
      <p>Recomendaciones: {evaluation.backlogcal}</p>

      <h2>Respuestas:</h2>
      <pre>{JSON.stringify(responses, null, 2)}</pre>

      <h2>Imágenes:</h2>
      <h3>Categoría A</h3>
      <p>Subcategoría A1</p>
      {evaluation.img_a1 && <div>A1: <img src={evaluation.img_a1} alt="A1" width={200}/></div>}
      <p>Subcategoría A2</p>
      {evaluation.img_a2 && <div>A2: <img src={evaluation.img_a2} alt="A2" width={200}/></div>}
      <p>Subcategoría A3</p>
      {evaluation.img_a3 && <div>A3: <img src={evaluation.img_a3} alt="A3" width={200}/></div>}
      <p>Subcategoría A4</p>
      {evaluation.img_a4 && <div>A4: <img src={evaluation.img_a4} alt="A4" width={200}/></div>}

      <h3>Categoría B</h3>
      <p>Subcategoría B1</p>
      {evaluation.img_b1 && <div>B1: <img src={evaluation.img_b1} alt="B1" width={200}/></div>}
      <p>Subcategoría B2</p>
      {evaluation.img_b2 && <div>B2: <img src={evaluation.img_b2} alt="B2" width={200}/></div>}

      <h3>Categoría C</h3>
      <p>Subcategoría C1</p>
      {evaluation.img_c1 && <div>C1: <img src={evaluation.img_c1} alt="C1" width={200}/></div>}
      <p>Subcategoría C2</p>
      {evaluation.img_c2 && <div>C2: <img src={evaluation.img_c2} alt="C2" width={200}/></div>}
    </div>
  );
}

RosaEvaluationView.propTypes = {
  id_evaluacion: PropTypes.number.isRequired,
};