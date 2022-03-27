import { useGame } from "../../context/gameContext";
import GridRow from "../GridRow/GridRow";
import styles from "./GameGrid.module.css";

const GameGrid: React.FC = () => {
  const { selectedWord } = useGame();

  console.log(selectedWord);

  return (
    <div className={styles.gridContainer}>
      <GridRow word="" />
      <GridRow word="" />
      <GridRow word="" />
      <GridRow word="" />
      <GridRow word="" />
      <GridRow word="" />
    </div>
  );
};

export default GameGrid;
