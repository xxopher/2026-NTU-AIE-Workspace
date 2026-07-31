import { useState } from "react";

import GameStatus from "./components/GameStatus";
import GuessInput from "./components/GuessInput";
import GuessList from "./components/GuessList";
import styles from "./App.module.css";

function getRandomNumber() {
  console.log("getRandomNumber called");
  return Math.floor(Math.random() * 20) + 1;
}

function App() {
  // Do not call getRandomNumber() directly in useState. This will cause the function to be called on every render.
  // const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random()* 20) + 1);
  // const [secretNumber, setSecretNumber] = useState(getRandomNumber());

  // Use Lazy Initialization
  // This way, getRandomNumber() is only called once during the initial render.
  const [secretNumber, setSecretNumber] = useState(getRandomNumber);
  // Use an inline function to call getRandomNumber() if you want to pass arguments to it.
  // This is useful if you want to generate a random number within a specific range.
  // const [secretNumber, setSecretNumber] = useState(()=> getRandomNumber(10));

  // Array to store the guesses made by the user
  const [guesses, setGuesses] = useState([]);

  // Determine if the game is won by checking if the last guess matches the secret number
  // Uses a derived state instead of storing it in a separate state variable. 
  // This is more efficient and avoids unnecessary re-renders.
  const lastGuess = guesses[guesses.length - 1];
  const gameWon = lastGuess === secretNumber;

  const guessHandler = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  const resetHandler = () => {
    setSecretNumber(getRandomNumber());
    setGuesses([]);
  };

  return (
    <div className={styles.game}>
      <h1>Guess the Number</h1>
      <p>I am thinking of a number between 1 and 20.</p>

      <GameStatus
        secretNumber={secretNumber}
        lastGuess={lastGuess}
        gameWon={gameWon}
      />
      <GuessInput onGuess={guessHandler} disabled={gameWon} />
      <button
        type="button"
        className={styles.resetButton}
        onClick={resetHandler}
      >
        Play Again
      </button>
      <GuessList guesses={guesses} secretNumber={secretNumber} />
    </div>
  );
}

export default App;
