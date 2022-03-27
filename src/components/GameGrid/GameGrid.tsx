import { useGame } from "../../context/gameContext";

const GameGrid: React.FC = () => {
  const { selectedWord } = useGame();

  console.log(selectedWord);

  return <p>hi</p>;
};

export default GameGrid;
