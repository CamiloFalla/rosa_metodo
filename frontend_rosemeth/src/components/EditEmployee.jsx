//src/components/EditEmployee.jsx

import { useState } from "react";

export function EditEmployee() {
  const [newname, setNewname] = useState("Aquí el empleado que va a salir");

  const handleClick = () => {
    setNewname("Actualizando nombre...");
  };

  return (
    <div>
      <h2>Aquí vamos a Editar los empleados</h2>
      <button className="edit-employee-button" onClick={handleClick}>
        <span className="message-ini-card">{newname}</span>
        <span className="edit-card-hover">Actualizar info</span>
      </button>
      <strong>{newname}</strong>
    </div>
  );
}

export default EditEmployee;