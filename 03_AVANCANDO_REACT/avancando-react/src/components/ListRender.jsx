import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  //usar o index é uma má prática. Em um sistema real prezamos
  //por utilizar o id do elemento ou então gerar um id que seja unico para
  //aquele elemento

  const [users, setUsers] = useState([
    { id: 0, name: "Gabriel", age: 21 },
    { id: 1, name: "Linda", age: 23 },
    { id: 2, name: "Adam", age: 34 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      console.log(prevUsers); //após a execução de deleteRandom, prevUsers
      //que antes era o valor atual passa a ser o valor anterior
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
