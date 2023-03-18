import { React, useState } from "react";
import closeModalIcon from "../img/cerrar.svg";
import Alert from "./Alert";
import { generateId } from "../helpers";

function Modal({ setModal, animarModal, setAnimarModal, getBudget }) {
  const [mensaje, setMensaje] = useState("");
  const [name, setName] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);

      return 0;
    }

    getBudget({
      id: generateId(),
      name,
      cantidad,
      categoria,
      fecha: Date.now(),
    });
  };

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 300);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={closeModalIcon} alt="cerra modal" onClick={closeModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : ""}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Alert mensaje={mensaje} tipo={"error"} />}
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Añade el nombre del gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder="Añade la cantidad del gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
}

export default Modal;
