import React from "react";
import Budget from "./Budget";

function BudgetList({ gastos }) {
  return (
    <div className="listado-gastos contenedor">
      <h1>{gastos.length ? "Gastos" : "No hay Gastos"}</h1>
      {gastos.map((gasto) => (
        <Budget key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
}

export default BudgetList;
