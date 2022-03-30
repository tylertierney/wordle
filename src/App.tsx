import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import { useGame } from "./context/gameContext";

function App() {
  const { gameIsActive, wonTheGame } = useGame();
  const [currentGuess, setCurrentGuess] = useState("");
  const [modalShowing, setModalShowing] = useState(false);

  useEffect(() => {
    if (!gameIsActive) {
      setModalShowing(true);
    }
  }, [gameIsActive]);

  return (
    <div className="App">
      <Navbar />
      <GameGrid currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
      {modalShowing && (
        <Modal wonOrLost={wonTheGame} setModalShowing={setModalShowing} />
      )}
    </div>
  );
}

export default App;
