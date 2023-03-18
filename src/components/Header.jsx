import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";
function Header({ gastos, budget, setBudget, setIsValid, isValid }) {
  return (
    <header>
      <h1>Planificar Gastos</h1>
      {isValid ? (
        <BudgetControl budget={budget} gastos={gastos} />
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
