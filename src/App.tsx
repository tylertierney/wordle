import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import { useGame } from "./context/gameContext";

function App() {
  const { guesses } = useGame();
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <div className="App">
      <GameGrid currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
    </div>
  );
}

export default App;
