//src/components/EditEmployee.jsx

export function EditEmployee() {
    const [newname, setNewname] = useState('Aqui el empleado que va a salir');
  
    const handleClick = () => {
      setNewname('Actualizando nombre...');
    };
  
    return (
      <>
        <h2>Aqui vamos a Editar los empleados</h2>
        <button className="edit-employee-button" onClick={handleClick}>
          <span className="message-ini-card">{newname}</span>
          <span className="edit-card-hover">Actualizar info</span>
        </button>
        <strong>{newname}</strong>
      </>
    );
  }