import styles from "./Square.module.css";

interface SquareProps {
  letter: string;
}

const Square: React.FC<SquareProps> = ({ letter }) => {
  return <div className={styles.square}>{letter}</div>;
};

export default Square;
