import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BudgetList from "./components/BudgetList";
import newBudgetIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const getBudget = (budgetObj) => {
    setGastos([...gastos, budgetObj]);
    setModal(false);
    setAnimarModal(false);
  };

  const handleNewBudget = () => {
    setModal(true);
    setTimeout(() => {
      console.log("nuevo modal");
      setAnimarModal(true);
    }, 300);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <BudgetList gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={newBudgetIcon}
              alt="nuevo gasto"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          getBudget={getBudget}
        />
      )}
    </div>
  );
}

export default App;
