import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Hello World React!</h1>
      <h2>Emmet funcionou!</h2>

      <div className="containerStrong">
        <strong>Vou ficar craque em react</strong>

        <button onClick={() => setText("Show! Obrigada")}>
          Clica aqui para me impulsionar e apoiar
        </button>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
