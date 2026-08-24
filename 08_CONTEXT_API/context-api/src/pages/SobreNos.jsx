// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

// 4 - refatorando com hook

const SobreNos = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default SobreNos;
