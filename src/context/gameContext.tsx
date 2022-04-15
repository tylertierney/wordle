import { useContext, createContext, useEffect, useState } from "react";
import { words } from "../dictionary/words-of-the-day";
import { updateLocalStorage } from "../utils/utils";

export interface WordleHistoryType {
  targetWord: string;
  guesses: string[];
  disabledLetters: string[];
}

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
    const existingGame = localStorage.getItem("wordle-history");
    if (existingGame) {
      const currentGameState: WordleHistoryType = JSON.parse(existingGame);
      setTargetWord(currentGameState.targetWord);
      setGuesses(currentGameState.guesses);
      setDisabledLetters(new Set<string>(currentGameState.disabledLetters));
    } else {
      const possibleWords = words.split("\n");
      const targetWord =
        possibleWords[Math.floor(Math.random() * possibleWords.length)];
      setTargetWord(targetWord);
      const currentGameState = {
        targetWord,
        guesses: [],
        disabledLetters: [],
      };
      localStorage.setItem("wordle-history", JSON.stringify(currentGameState));
    }
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
    updateLocalStorage("guesses", copyOfGuesses);
  };

  const addDisabledLetters = (letter: string) => {
    let copyOfDisabledLetters = disabledLetters;
    copyOfDisabledLetters.add(letter);
    setDisabledLetters(copyOfDisabledLetters);
    updateLocalStorage("disabledLetters", Array.from(copyOfDisabledLetters));
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
    localStorage.setItem(
      "wordle-history",
      JSON.stringify({ targetWord, guesses: [], disabledLetters: [] })
    );
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
