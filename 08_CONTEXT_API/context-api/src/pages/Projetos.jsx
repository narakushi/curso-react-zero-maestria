// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook

import { useCounterContext } from "../hooks/useCounterContext";

const Projetos = () => {
  // const { counter } = useCounterContext();

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Projetos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Projetos;
