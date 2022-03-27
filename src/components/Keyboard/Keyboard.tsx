interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: (currentGuess: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentGuess,
  setCurrentGuess,
}) => {
  const handleKeyInput = (textInput: string) => {
    for (let i = 0; i < textInput.length; i++) {
      if (textInput[i] < "A" || textInput[i] > "z") {
        return;
      }
    }

    setCurrentGuess(textInput);
  };

  return (
    <input
      type="text"
      value={currentGuess}
      onChange={(e) => handleKeyInput(e.target.value)}
      maxLength={5}
      // onKeyDown={(e) => handleKeyInput(e, currentGuess)}
    />
  );
};

export default Keyboard;
