import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  typedLetter,

  setTypedLetter,
}) => {
  return (
    <div className="game">
      <p className="points">
        <span>pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>VocÊ ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          ),
        )}
        <span className="blankSquare"></span>
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form action="">
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setTypedLetter(e.target.value)}
            value={typedLetter}
          />
          <button onClick={(e) => verifyLetter(e)}>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
