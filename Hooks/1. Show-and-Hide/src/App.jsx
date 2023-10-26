import { useState } from "react";

function App() {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <>
      <button onClick={handleClick}>Show/Hide</button>
      {hide === true ? <h1>Hola</h1> : null}
    </>
  );
}

export default App;
