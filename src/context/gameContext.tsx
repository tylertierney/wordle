import { useContext, createContext, useEffect, useState } from "react";
import { words } from "../dictionary/words-of-the-day";

interface ContextInterface {
  targetWord: string;
  guesses: string[];
  updateGuesses: (
    type: "addLetter" | "removeLetter" | "confirmGuess",
    newGuess: string
  ) => void;
}

const initial: ContextInterface = {
  targetWord: "",
  guesses: [],
  updateGuesses: (
    type: "addLetter" | "removeLetter" | "confirmGuess",
    newLetter: string
  ) => null,
};

export const GameContext = createContext(initial);

const GameProvider = ({ children }: any) => {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    const possibleWords = words.split("\n");
    const targetWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setTargetWord(targetWord);
  }, []);

  const updateGuesses = (
    type: "addLetter" | "removeLetter" | "confirmGuess",
    newGuess: string
  ) => {
    let copyOfGuesses = [...guesses];
    switch (type) {
      case "confirmGuess":
        copyOfGuesses.push(newGuess);
        break;
    }
    console.log(copyOfGuesses);
    setGuesses(copyOfGuesses);
  };

  const ctx: ContextInterface = {
    targetWord,
    guesses,
    updateGuesses,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGame = () => useContext(GameContext);
