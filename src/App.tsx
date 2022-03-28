import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import Navbar from "./components/Navbar/Navbar";
import { useGame } from "./context/gameContext";

function App() {
  const { gameIsActive, targetWord } = useGame();
  const [currentGuess, setCurrentGuess] = useState("");
  console.log(targetWord);

  return (
    <div className="App">
      <Navbar />
      <GameGrid currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
    </div>
  );
}

export default App;
