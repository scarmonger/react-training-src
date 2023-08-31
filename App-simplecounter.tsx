import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    counter >= 2 || counter == "Done!"
      ? setCounter("Done!")
      : setCounter(counter + 1);
  }
  function handleMinus() {
    counter <= -2 || counter == "Done!"
      ? setCounter("Done!")
      : setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      {counter}
      <button onClick={handlePlus}>+</button>
      <p>
        <button onClick={handleReset}>R</button>
      </p>
    </div>
  );
}

export default App;
