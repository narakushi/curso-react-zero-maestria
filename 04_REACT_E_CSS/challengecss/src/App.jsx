import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, brand: "Fiat", model: "Pálio", km: 0, isNew: true },
    { id: 2, brand: "VW", model: "Sedan", km: 10000, isNew: false },
    { id: 3, brand: "Chevrolet", model: "Onix", km: 0, isNew: true },
    { id: 4, brand: "Fiat", model: "Uno", km: 20000, isNew: false },
  ];

  return (
    <div className="container_cars">
      <h1>Desafio 5 - CSS</h1>

      <div className="cars_exibition">
        <h2>Detalhes dos carros</h2>
        {cars.map((car) => (
          <CarDetails key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default App;
