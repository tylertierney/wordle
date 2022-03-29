import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import Navbar from "./components/Navbar/Navbar";
import { useGame } from "./context/gameContext";
import { getLetterValue } from "./utils/utils";

function App() {
  const { gameIsActive, targetWord, addGuess, addDisabledLetters } = useGame();
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <div className="App">
      <Navbar />
      <GameGrid currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
    </div>
  );
}

export default App;
