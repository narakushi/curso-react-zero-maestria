import React, { useState } from "react";

export const Contador = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Valor: {value}</p>
      <div>
        <button onClick={() => setValue((prevValue) => prevValue + 1)}>
          Incrementar
        </button>
        <button
          onClick={() =>
            setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0))
          }
        >
          Decrementar
        </button>
        <button onClick={() => setValue(0)}>Resetar</button>
      </div>
    </div>
  );
};
