import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;

  const [name] = useState("Matheus");

  const redTitle = false;

  return (
    <div>
      {/** CSS Global */}
      <h1>React com CSS</h1>

      <MyComponent />

      <p>Este paragráfo é do app.js</p>

      {/** Inline CSS */}

      <p
        style={{
          color: "magenta",
          padding: "25px",
          backgroundColor: "pink",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          backgroundColor: "pink",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/** CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "a" ? { color: "green", backgroundColor: "#f1f1f1" } : null
        }
      >
        Teste nome
      </h2>

      {/**Classe dinamica */}

      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>

      {/** CSS Modules */}

      <Title />

      <h2 className="my_title">Título</h2>
    </div>
  );
}

export default App;
