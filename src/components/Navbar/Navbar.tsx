import { useGame } from "../../context/gameContext";
import PlayAgainBtn from "../PlayAgainBtn/PlayAgainBtn";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const { gameIsActive } = useGame();

  return (
    <div className={styles.navContainer}>
      <h3 className={styles.title}>Wordle</h3>
      {!gameIsActive && (
        <PlayAgainBtn
          props={{
            position: "absolute",
            right: "0",
            height: "100%",
            borderRadius: "0px",
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
