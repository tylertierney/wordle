import styles from "./Tile.module.css";

interface TileProps {
  letter: string;
}

const Tile: React.FC<TileProps> = ({ letter }) => {
  return <div className={styles.tile}>{letter}</div>;
};

export default Tile;
