import { useState } from "react";
import Alert from "./Alert";

const NewBudget = ({ budget, setBudget, setIsValid }) => {
  const [mensaje, setMensaje] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (isNaN(budget) || budget <= 0) {
      return setMensaje("presupuesto no valido");
    }

    setMensaje("");
    setIsValid(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>

          <input
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            type="text"
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Alert mensaje={mensaje} tipo={"error"} />}
      </form>
    </div>
  );
};

export default NewBudget;
