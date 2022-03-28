import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import Navbar from "./components/Navbar/Navbar";
import { useGame } from "./context/gameContext";

function App() {
  const { gameIsActive, targetWord } = useGame();
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <div className="App">
      <Navbar />
      <GameGrid currentGuess={currentGuess} />
      <Keyboard
        currentGuess={currentGuess}
        setCurrentGuess={gameIsActive ? setCurrentGuess : null}
      />
    </div>
  );
}

export default App;
