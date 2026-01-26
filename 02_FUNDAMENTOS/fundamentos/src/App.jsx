//ordem de importação

// componentes

import PrimeiroComponente from "./components/PrimeiroComponente";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// styles / css
import "./App.css";

function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <MyComponent />
      <Events />

      <Challenge />
    </>
  );
}

export default App;
