import Square from "../Square/Square";
import styles from "./GridRow.module.css";

interface GridRowProps {
  word: string;
}

const GridRow: React.FC<GridRowProps> = ({ word }) => {
  return (
    <div className={styles.rowContainer}>
      <Square letter="" />
      <Square letter="" />
      <Square letter="" />
      <Square letter="" />
      <Square letter="" />
    </div>
  );
};

export default GridRow;
