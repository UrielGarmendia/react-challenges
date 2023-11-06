import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [val, setVal] = useState(0);
  const setValue = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValue} min={0} max={100} />
        </form>
      </div>
    </>
  );
}

export default App;
