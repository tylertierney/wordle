import { useGame } from "../../context/gameContext";
import styles from "./Key.module.css";
import CSS from "csstype";
import { getLetterValue } from "../../utils/utils";
import { useEffect } from "react";

interface KeyProps {
  name: string | JSX.Element;
  handleClick: (name: string | JSX.Element) => void;
  disabled: boolean;
}

const Key: React.FC<KeyProps> = ({ name, handleClick, disabled }) => {
  let styleProps: CSS.Properties = {};
  if (typeof name != "string" || name === "ENT") {
    styleProps.padding = "10px 15px";
  }

  if (disabled) {
    styleProps.backgroundColor = "rgb(255, 255, 255, 0.2)";
    styleProps.opacity = 1;
    styleProps.cursor = "default";
  }

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
