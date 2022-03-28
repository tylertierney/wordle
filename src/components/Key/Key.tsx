import { IconTree, IconType } from "react-icons";
import { useGame } from "../../context/gameContext";
import styles from "./Key.module.css";

interface KeyProps {
  name: string | JSX.Element;
  currentGuess: string;
  setCurrentGuess: (currentGuess: string) => void;
}

const Key: React.FC<KeyProps> = ({ name, currentGuess, setCurrentGuess }) => {
  const { updateGuesses } = useGame();

  let styleProps = null;
  if (typeof name != "string") {
    styleProps = { padding: "10px 15px" };
  }

  const handleClick = (name: string | JSX.Element) => {
    if (typeof name === "string") {
      if (name === "ENT") {
        updateGuesses("confirmGuess", currentGuess);
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
      style={{ ...styleProps }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

export default Key;
