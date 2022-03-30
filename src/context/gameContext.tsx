import { useContext, createContext, useEffect, useState } from "react";
import { Set } from "typescript";
import { words } from "../dictionary/words-of-the-day";

interface ContextInterface {
  targetWord: string;
  guesses: string[];
  addGuess: (newGuess: string) => void;
  gameIsActive: boolean;
  disabledLetters: Set<string>;
  addDisabledLetters: (letter: string) => void;
  resetGame: () => void;
  wonTheGame: boolean;
}

const initial: ContextInterface = {
  targetWord: "",
  guesses: [],
  addGuess: (newGuess: string) => null,
  gameIsActive: true,
  disabledLetters: new Set([]),
  addDisabledLetters: (letter: string) => null,
  resetGame: () => null,
  wonTheGame: false,
};

export const GameContext = createContext(initial);

const GameProvider = ({ children }: any) => {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameIsActive, setGameIsActive] = useState(true);
  const [disabledLetters, setDisabledLetters] = useState<Set<string>>(
    new Set([])
  );
  const [wonTheGame, setWonTheGame] = useState<boolean>(false);

  useEffect(() => {
    const possibleWords = words.split("\n");
    const targetWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setTargetWord(targetWord);
  }, []);

  const addGuess = (newGuess: string) => {
    let copyOfGuesses = [...guesses];
    copyOfGuesses.push(newGuess);
    if (newGuess === targetWord.toUpperCase()) {
      setGameIsActive(false);
      setWonTheGame(true);
    } else {
      if (copyOfGuesses.length > 5) {
        setGameIsActive(false);
        setWonTheGame(false);
      }
    }
    setGuesses(copyOfGuesses);
  };

  const addDisabledLetters = (letter: string) => {
    let copyOfDisabledLetters = disabledLetters;
    copyOfDisabledLetters.add(letter);
    setDisabledLetters(copyOfDisabledLetters);
  };

  const resetGame = () => {
    const possibleWords = words.split("\n");
    const targetWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setTargetWord(targetWord);
    setDisabledLetters(new Set([]));
    setGuesses([]);
    setGameIsActive(true);
    setWonTheGame(false);
  };

  const ctx: ContextInterface = {
    targetWord,
    guesses,
    addGuess,
    gameIsActive,
    disabledLetters,
    addDisabledLetters,
    resetGame,
    wonTheGame,
  };

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGame = () => useContext(GameContext);
