import styles from "./PlayAgainBtn.module.css";
import { IoMdRefresh } from "react-icons/io";
import { useGame } from "../../context/gameContext";
import CSS from "csstype";

interface PlayAgainBtnProps {
  handleClose?: Function;
  props?: CSS.Properties;
}

const PlayAgainBtn: React.FC<PlayAgainBtnProps> = ({ handleClose, props }) => {
  const { resetGame } = useGame();

  const onClick = () => {
    if (handleClose) {
      return handleClose();
    } else {
      resetGame();
    }
  };

  return (
    <button className={styles.playAgainBtn} onClick={onClick} style={props}>
      Play Again
      <IoMdRefresh fontSize="1.5rem" strokeWidth={16} />
    </button>
  );
};

export default PlayAgainBtn;
