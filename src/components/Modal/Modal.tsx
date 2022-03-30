import { useGame } from "../../context/gameContext";
import styles from "./Modal.module.css";
import PlayAgainBtn from "../PlayAgainBtn/PlayAgainBtn";

interface ModalProps {
  wonOrLost: boolean;
  setModalShowing: Function;
}

const Modal: React.FC<ModalProps> = ({ wonOrLost, setModalShowing }) => {
  const { targetWord, resetGame, guesses } = useGame();

  const result = wonOrLost ? "😎 You Won! 😎" : "😭 You Lost! 😭";

  const targetWordArr = targetWord
    .split("")
    .map((letter: string, idx: number) => {
      return (
        <div key={idx} className={styles.letterBox}>
          {letter}
        </div>
      );
    });

  const preventBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setModalShowing(false);
    resetGame();
  };

  return (
    <div className={styles.overlay} onClick={() => setModalShowing(false)}>
      <div className={styles.modalContainer} onClick={(e) => preventBubble(e)}>
        <div className={styles.modalHeader}>{result}</div>
        <div className={styles.modalBody}>
          <div className={styles.targetWordContainer}>
            <p>The word was...</p>
            <div className={styles.lettersContainer}>{targetWordArr}</div>
          </div>
          {wonOrLost && (
            <div className={styles.numberOfTriesContainer}>
              <p style={{ fontSize: "1.3rem" }}>
                You won in{" "}
                <strong style={{ fontSize: "1.5rem" }}>
                  <u>{guesses.length}</u>
                </strong>{" "}
                {guesses.length > 1 ? "attempts" : "attempt"}
              </p>
            </div>
          )}
        </div>
        <div className={styles.modalFooter}>
          <PlayAgainBtn handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
