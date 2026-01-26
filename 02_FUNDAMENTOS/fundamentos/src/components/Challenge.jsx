const Challenge = () => {
  let v1 = 8;
  let v2 = 5;

  const handleSum = () => {
    console.log(v1 + v2);
  };

  return (
    <>
      <p>V1: {v1}</p>
      <p>V2: {v2}</p>
      <button onClick={handleSum}>Somar valores</button>
    </>
  );
};

export default Challenge;
