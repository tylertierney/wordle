import Tile from "../Tile/Tile";
import styles from "./GridRow.module.css";

interface GridRowProps {
  word: string | null;
}

const GridRow: React.FC<GridRowProps> = ({ word }) => {
  let tiles = new Array(5).fill("");
  let wordAsArr: string[] = [];
  if (word) {
    wordAsArr = word.split("");
  }

  tiles = tiles.map((tile, idx) => {
    return <Tile key={idx} letter={wordAsArr[idx]} />;
  });

  return <div className={styles.rowContainer}>{tiles}</div>;
};

export default GridRow;
