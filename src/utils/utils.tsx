import { words } from "../dictionary/words-of-the-day";

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
