import { useContext, createContext, useEffect, useState } from "react";
import { words } from "../dictionary/words-of-the-day";

interface ContextInterface {
  selectedWord: string;
  guesses: string[];
}

const initial: ContextInterface = {
  selectedWord: "",
  guesses: [],
};

export const GameContext = createContext(initial);

const GameProvider = ({ children }: any) => {
  const [selectedWord, setSelectedWord] = useState("");
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const possibleWords = words.split("\n");
    const selectedWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setSelectedWord(selectedWord);
  }, []);

  const ctx: ContextInterface = {
    selectedWord,
    guesses,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGame = () => useContext(GameContext);
