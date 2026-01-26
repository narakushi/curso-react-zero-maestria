const UserDetails = ({ name, age, occupation }) => {
  return (
    <div>
      <h3>Nome: {name}</h3>
      <p>Idade: {age}</p>
      <p>Profissão: {occupation}</p>
      {age >= 18 ? <p>Está apto (a) a tirar CNH!</p> : <p>Menor de idade.</p>}
    </div>
  );
};

export default UserDetails;
