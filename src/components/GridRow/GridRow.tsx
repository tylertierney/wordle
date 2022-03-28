import { useGame } from "../../context/gameContext";
import { getLetterValue } from "../../utils/utils";
import Tile from "../Tile/Tile";
import styles from "./GridRow.module.css";

interface GridRowProps {
  word: string | null;
  checkLetterValues: boolean;
}

const GridRow: React.FC<GridRowProps> = ({ word, checkLetterValues }) => {
  const { targetWord, addDisabledLetters } = useGame();
  let tiles = new Array(5).fill("");
  let wordAsArr: string[] = [];
  if (word) {
    wordAsArr = word.split("");
  }
  tiles = tiles.map((tile, idx) => {
    let bgColor = "";
    if (checkLetterValues && wordAsArr[idx]) {
      bgColor = getLetterValue(wordAsArr[idx], targetWord, idx);
    }
    return (
      <Tile
        key={idx}
        letter={wordAsArr[idx]}
        bgColor={bgColor}
        useFlipAnimation={checkLetterValues}
      />
    );
  });

  return <div className={styles.rowContainer}>{tiles}</div>;
};

export default GridRow;
