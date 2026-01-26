import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log(
      "Olá, estou vindo do componente pai, mas sou usada por meio do componente filho!"
    );
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const persons = [
    { id: 1, name: "Amanda", age: 21, occupation: "Programadora" },
    { id: 2, name: "Jason", age: 31, occupation: "Agente de Turismo" },
    { id: 3, name: "Wendell", age: 21, occupation: "Programador" },
    { id: 4, name: "Lídia", age: 15, occupation: "Estudante" },
  ];

  return (
    <>
      <h1>Avançando em React</h1>
      {/** Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/** Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/** props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/** reaproveitando componentes */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branca" newCar={false} />
      {/** loop em array de objetos */}
      <h1>Renderização de lista</h1>
      {cars.map((car) => (
        <CarDetails
          // {...car}
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/** fragment */}
      <Fragment propFragment="Teste de prop" />
      <Container>
        <p>Este é um exemplo de children</p>
      </Container>
      <Container>
        <p>Aqui é possivel reutilizar o children com outro elemento </p>
      </Container>
      {/** executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/** state lift */}
      <Message msg={message} /> {/*componente que consome o estado*/}
      <ChangeMessageState handleMessage={handleMessage} />{" "}
      {/** componente que atualiza o estado */}
      {/** Desafio 04 */}
      <h2>Desafio 04 - Exibindo detalhes dos usuários</h2>
      {persons.map((person) => (
        <UserDetails key={person.id} {...person} />
      ))}
    </>
  );
}

export default App;
