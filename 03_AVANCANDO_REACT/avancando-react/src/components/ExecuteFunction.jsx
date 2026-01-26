const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <h2>Funções por props</h2>
      <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  );
};

export default ExecuteFunction;
