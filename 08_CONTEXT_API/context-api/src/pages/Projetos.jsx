import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Projetos = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Projetos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Projetos;
