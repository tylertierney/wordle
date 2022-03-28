import { useGame } from "../../context/gameContext";
import styles from "./Key.module.css";
import CSS from "csstype";
import { getLetterValue } from "../../utils/utils";

interface KeyProps {
  name: string | JSX.Element;
  currentGuess: string;
  setCurrentGuess: Function | null;
  disabled: boolean;
}

const Key: React.FC<KeyProps> = ({
  name,
  currentGuess,
  setCurrentGuess,
  disabled,
}) => {
  const { addGuess, disabledLetters, addDisabledLetters, targetWord } =
    useGame();

  let styleProps: CSS.Properties = {};
  if (typeof name != "string" || name === "ENT") {
    styleProps.padding = "10px 15px";
  }

  if (disabled) {
    styleProps.backgroundColor = "rgb(255, 255, 255, 0.2)";
    styleProps.opacity = 1;
    styleProps.cursor = "default";
  }

  const handleClick = (name: string | JSX.Element) => {
    if (!setCurrentGuess) return;
    if (typeof name === "string") {
      if (name === "ENT") {
        addGuess(currentGuess);
        for (let i = 0; i < currentGuess.length; i++) {
          if (getLetterValue(currentGuess[i], targetWord, i) === "#273640") {
            addDisabledLetters(currentGuess[i]);
          }
        }
        setCurrentGuess("");
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

  return (
    <button
      className={styles.keyBtn}
      style={styleProps}
      onClick={() => handleClick(name)}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Key;
