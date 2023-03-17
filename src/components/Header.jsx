import React from "react";
import NewBudget from "./NewBudget";

function Header({ budget, setBudget, setIsValid, isValid }) {
  return (
    <header>
      <h1>Planificar Gastos</h1>
      {isValid ? (
        <>es valido</>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          isValid={isValid}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
}

export default Header;
