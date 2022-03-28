import { useGame } from "../../context/gameContext";
import GridRow from "../GridRow/GridRow";
import styles from "./GameGrid.module.css";

interface GameGridProps {
  currentGuess: string;
}

const GameGrid: React.FC<GameGridProps> = ({ currentGuess }) => {
  const { targetWord, guesses } = useGame();

  let rows = new Array(6).fill(null);
  const currentGuessRowIdx = guesses.length;

  rows = rows.map((row: null, idx: number) => {
    let wordToUse = guesses[idx];
    let checkLetterValues = true;
    if (idx === currentGuessRowIdx) {
      wordToUse = currentGuess;
    }
    return <GridRow key={idx} word={wordToUse} />;
  });

  return <div className={styles.gridContainer}>{rows}</div>;
};

export default GameGrid;
