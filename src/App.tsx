import { useEffect, useState } from "react";
import init, { get_number as getNumber } from "@tchgui/rust";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(-1);

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <p>number: {number}</p>
      <button
        type="button"
        onClick={() => {
          const n = getNumber();
          setNumber(n);
        }}
      >
        set number from rust!
      </button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
