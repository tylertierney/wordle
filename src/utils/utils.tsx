import { words } from "../dictionary/words-of-the-day";
import { WordleHistoryType } from "../context/gameContext";

export const updateLocalStorage = (
  key: "guesses" | "disabledLetters",
  newValue: string[]
) => {
  let wordleHistory: string | null = localStorage.getItem("wordle-history");
  if (wordleHistory !== null) {
    let currentGameState: WordleHistoryType = JSON.parse(wordleHistory);
    currentGameState[key] = newValue;
    localStorage.setItem("wordle-history", JSON.stringify(currentGameState));
  }
};

export const getLetterValue = (letter: string, word: string, index: number) => {
  let result = "var(--darkerBlue)";
  word = word.toUpperCase();
  if (word.includes(letter)) {
    result = "var(--yellowTile)";

    if (word[index] === letter) {
      result = "var(--greenTile";
    }
  }

  return result;
};

export const checkIfWordExists = (word: string) => {
  if (words.includes(word)) {
    return true;
  }
  return false;
};

export const keyboardAlphabet = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
