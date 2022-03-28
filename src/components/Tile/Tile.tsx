import styles from "./Tile.module.css";

interface TileProps {
  letter: string;
  bgColor: string;
  useFlipAnimation: boolean;
}

const Tile: React.FC<TileProps> = ({ letter, bgColor, useFlipAnimation }) => {
  let tileClass = styles.tile;
  if (useFlipAnimation) {
    tileClass = `${styles.tile} ${styles.flipAnimation}`;
  }

  return (
    <div className={tileClass}>
      <div className={styles.tileInner}>
        <div className={styles.frontSide}>{letter}</div>
        <div className={styles.backSide} style={{ backgroundColor: bgColor }}>
          {letter}
        </div>
      </div>
    </div>
  );
};

export default Tile;
