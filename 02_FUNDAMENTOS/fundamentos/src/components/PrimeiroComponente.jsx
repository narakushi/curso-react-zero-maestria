// arquivo de estilo

import MyComponent from "./MyComponent";

/*outros arquivos*/

const PrimeiroComponente = () => {
  return (
    <div>
      {/* algum comentário */}
      <h1>Meu primeiro componente!</h1>
      <p className="teste">
        Na verdade deve ser o milesimo, vamo ficar mestra!
      </p>
      <MyComponent />
    </div>
  );
};

export default PrimeiroComponente;
