import Key from "../Key/Key";
import styles from "./Keyboard.module.css";
import { MdOutlineBackspace } from "react-icons/md";
import { useGame } from "../../context/gameContext";
import { checkIfWordExists, getLetterValue } from "../../utils/utils";
import { useEffect } from "react";
import { useToast } from "../../context/toastContext";

interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: Function;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentGuess,
  setCurrentGuess,
}) => {
  const {
    disabledLetters,
    addDisabledLetters,
    addGuess,
    targetWord,
    gameIsActive,
  } = useGame();
  const alphabet = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const { addToast } = useToast();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const uppercaseKey = e.key.toUpperCase();
      if (uppercaseKey === "ENTER") {
        handleClick("ENT");
      } else if (uppercaseKey === "BACKSPACE") {
        handleClick(<p></p>);
      } else if (uppercaseKey >= "A" && uppercaseKey <= "Z") {
        handleClick(uppercaseKey);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [currentGuess, gameIsActive]);

  const keysToIgnore = [
    "META",
    "CONTROL",
    "CAPSLOCK",
    "SHIFT",
    "ALT",
    "TAB",
    "CONTEXTMENU",
  ];

  const handleClick = (name: string | JSX.Element) => {
    if (!gameIsActive) {
      return;
    }
    if (typeof name === "string") {
      if (name === "ENT") {
        if (currentGuess.length < 5) {
          return;
        }
        if (!checkIfWordExists(currentGuess.toLowerCase())) {
          addToast("Word doesn't exist");
          return;
        }
        addGuess(currentGuess);
        for (let i = 0; i < currentGuess.length; i++) {
          if (
            getLetterValue(currentGuess[i], targetWord, i) ===
            "var(--darkerBlue)"
          ) {
            addDisabledLetters(currentGuess[i]);
          }
        }
        setCurrentGuess("");
      } else if (keysToIgnore.includes(name)) {
        return;
      } else {
        if (currentGuess.length > 4) {
          return;
        }
        setCurrentGuess((currentGuess += name));
      }
    } else {
      const result = currentGuess.slice(0, -1);
      setCurrentGuess(result);
    }
  };

  let rowsArr = alphabet.map((row, idx) => {
    return (
      <div className={styles.keyboardRow} key={idx}>
        {idx === 2 && (
          <Key name="ENT" handleClick={handleClick} disabled={false} />
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
              handleClick={handleClick}
              disabled={disabled}
            />
          );
        })}
        {idx === 2 && (
          <Key
            name={<MdOutlineBackspace />}
            handleClick={handleClick}
            disabled={false}
          />
        )}
      </div>
    );
  });

  return <div className={styles.keyboardContainer}>{rowsArr}</div>;
};

export default Keyboard;
