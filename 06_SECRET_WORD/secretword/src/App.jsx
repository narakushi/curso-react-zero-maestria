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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pick a random category

    const categories = Object.keys(words); //* torna-se uma lista com todas as categorias
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; //* o indice passa a ser sorteado entre 0 e a quantidade de chaves e sorteia uma categoria

    console.log(category);

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]; //* acessa a categoria e pega uma palavra aleatoriamente

    // console.log(word);

    return { word, category };
  }, [words]);

  // starts the secret word game
  const startGame = useCallback(() => {

    //clear all letters
    clearLetterStates();

    // pick word and pick category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    // console.log(word, category);

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    // console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input

  const verifyLetter = (letter) => {
    // setGameStage(stages[2].name);
    const normalizedLetter = letter.toLowerCase();

    // check if letter has alredy been utilized

    //* se a letra informada já estiver em guessedLetters ou wrongLetters, não contabiliza como outra tentativa
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };


  //* com o console log fora da função, é possível logar na tela o 
  //* que está acontecendo de forma sincrona, diferente de qnd se  
  //* loga dentro da função ou componente que está manipulando o valor
  // console.log(guessedLetters);
  // console.log(wrongLetters);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    //* as letras das palavras que temos no sistema
    //* serão transformadas em letras unicas
    //* pois uma vez digitada, caso se repita, 
    //* a letra é atribuida uma só vez ao array de guessedLetters
    //* Por exemplo a palavra "ovo", no array de guessedLetters
    //* entra a letra "o", uma unica vez

    const uniqueLetters = [... new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      // add score
      setScore((actualScore) => actualScore = actualScore + 100);

      // restart game with word
      startGame();
    }
    // console.log(uniqueLetters)

    console.log(score)

  }, [guessedLetters, letters, startGame]);

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
