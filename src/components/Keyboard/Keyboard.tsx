import Key from "../Key/Key";
import styles from "./Keyboard.module.css";
import { MdOutlineBackspace } from "react-icons/md";
import { useGame } from "../../context/gameContext";

interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: Function | null;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentGuess,
  setCurrentGuess,
}) => {
  const { disabledLetters } = useGame();
  const alphabet = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  let rowsArr = alphabet.map((row, idx) => {
    return (
      <div className={styles.keyboardRow} key={idx}>
        {idx === 2 && (
          <Key
            name="ENT"
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
            disabled={false}
          />
        )}
        {row.map((key, index) => {
          let disabled = false;
          if (disabledLetters.has(key)) {
            disabled = true;
          }
          return (
            <Key
              key={index}
              name={key}
              currentGuess={currentGuess}
              setCurrentGuess={setCurrentGuess}
              disabled={disabled}
            />
          );
        })}
        {idx === 2 && (
          <Key
            name={<MdOutlineBackspace />}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
            disabled={false}
          />
        )}
      </div>
    );
  });

  return <div className={styles.keyboardContainer}>{rowsArr}</div>;
};

export default Keyboard;
