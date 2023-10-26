import { useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);

  const handleStart = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(window.myTimer);
  };

  const handleReset = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  return (
    <>
      <div className="container">
        <h1>Timer</h1>
        <span>{Math.trunc(timer / 60)} mins </span>
        <span>{timer % 60} secs</span>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
