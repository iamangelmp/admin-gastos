import { React, useState, useEffect } from "react";
import closeModalIcon from "../img/cerrar.svg";
import Alert from "./Alert";

function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  getBudget,
  editar,
  setEditar,
}) {
  const [mensaje, setMensaje] = useState("");
  const [name, setName] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(editar).length > 0) {
      setName(editar.name);
      setCantidad(editar.cantidad);
      setCategoria(editar.categoria);
      setId(editar.id);
      setFecha(editar.fecha);
    }
  }, [editar]);

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
      id,
      name,
      cantidad,
      categoria,
      fecha,
    });
  };

  const closeModal = () => {
    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 300);
    setEditar({});
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
        <legend>{editar.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
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

        <input
          type="submit"
          value={editar.name ? "Guardar Cabio" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
}

export default Modal;
