import styles from "./GameStatus.module.css";

function GameStatus({ secretNumber, lastGuess, gameWon }) {
  let message = "Make your first guess!";
  if (gameWon) {
    message = `Correct! The number was ${secretNumber}.`;
  } else if (lastGuess !== undefined) {
    message = lastGuess > secretNumber ? "Too high!" : "Too low!";
  }

  return <p className={gameWon ? styles.won : styles.status}>{message}</p>;
}

export default GameStatus;
