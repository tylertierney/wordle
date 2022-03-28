import Key from "../Key/Key";
import styles from "./Keyboard.module.css";
import { MdOutlineBackspace } from "react-icons/md";
import { IconType } from "react-icons";

interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: (currentGuess: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentGuess,
  setCurrentGuess,
}) => {
  const alphabet = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className={styles.keyboardContainer}>
      <div className={styles.keyboardRow}>
        {alphabet[0].map((key, idx) => (
          <Key
            key={idx}
            name={key}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
          />
        ))}
      </div>
      <div className={styles.keyboardRow}>
        {alphabet[1].map((key, idx) => (
          <Key
            key={idx}
            name={key}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
          />
        ))}
      </div>
      <div className={styles.keyboardRow}>
        <Key
          name="ENT"
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
        />
        {alphabet[2].map((key, idx) => (
          <Key
            key={idx}
            name={key}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
          />
        ))}
        <Key
          name={<MdOutlineBackspace />}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
        />
      </div>
    </div>
  );
};

export default Keyboard;
