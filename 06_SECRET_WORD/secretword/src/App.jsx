// -> comentários do professor
// * -> comentários tainá (eu)

//CSS
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //pick a random category

    const categories = Object.keys(words); //* torna-se uma lista com todas as categorias
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; //* o indice passa a ser sorteado entre 0 e a quantidade de chaves e sorteia uma categoria

    console.log(category);

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]; //* acessa a categoria e pega uma palavra aleatoriamente

    console.log(word);

    return { word, category };
  };

  // starts the secret word game
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    console.log(word, category);

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // process the letter input

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
