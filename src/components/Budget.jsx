import { React, useEffect } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { dateFormatter } from "../helpers";
import ahorroIcon from "../img/icono_ahorro.svg";
import casaIcon from "../img/icono_casa.svg";
import comidaIcon from "../img/icono_comida.svg";
import gastoIcon from "../img/icono_gastos.svg";
import ocioIcon from "../img/icono_ocio.svg";
import saludIcon from "../img/icono_salud.svg";
import suscripcionesIcon from "../img/icono_suscripciones.svg";

const dictionaryIcons = {
  ahorro: ahorroIcon,
  comida: comidaIcon,
  casa: casaIcon,
  gastos: gastoIcon,
  ocio: ocioIcon,
  salud: saludIcon,
  suscripciones: suscripcionesIcon,
};

function Budget({ gasto, editar, setEditar, deleteBudget }) {
  const { id, name, cantidad, categoria, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteBudget(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcons[categoria]} alt="categoria gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                <span>Agregado el: </span>
                {dateFormatter(fecha)}
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Budget;
