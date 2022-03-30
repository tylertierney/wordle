import { useGame } from "../../context/gameContext";
import GridRow from "../GridRow/GridRow";
import styles from "./GameGrid.module.css";

interface GameGridProps {
  currentGuess: string;
}

const GameGrid: React.FC<GameGridProps> = ({ currentGuess }) => {
  const { guesses } = useGame();

  let rows = new Array(6).fill(null);
  const currentGuessRowIdx = guesses.length;
  let checkLetterValues = true;

  rows = rows.map((row: null, idx: number) => {
    let wordToUse = guesses[idx];
    if (idx === currentGuessRowIdx) {
      wordToUse = currentGuess;
      checkLetterValues = false;
    }
    return (
      <GridRow
        key={idx}
        word={wordToUse}
        checkLetterValues={checkLetterValues}
      />
    );
  });

  return <div className={styles.gridContainer}>{rows}</div>;
};

export default GameGrid;
