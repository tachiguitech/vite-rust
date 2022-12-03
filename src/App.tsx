import { useEffect, useState } from "react";
import init, {
  get_random_number as getRandomNumber,
  calc_factors as calcFactors,
} from "@tchgui/rust";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<number | undefined>();
  const [factorsMap, setFactorsMap] = useState<
    Map<number, number> | undefined
  >();

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <p>number: {number}</p>
      <button
        type="button"
        onClick={() => {
          const n = getRandomNumber(100);
          setNumber(n);
        }}
      >
        Set number from Rust !
      </button>
      <p>{factorsMap && <Factors factorsMap={factorsMap} />}</p>
      <button
        type="button"
        onClick={() => {
          if (!number) return;
          const factors = calcFactors(number);
          setFactorsMap(getFactorsMap(factors));
        }}
      >
        Calc factors !
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

const getFactorsMap = (numbers: Uint32Array): Map<number, number> => {
  const size = Math.floor(numbers.length / 2);
  let map = new Map<number, number>();
  [...Array(size)].forEach((_, i: number) => {
    const [key, value] = numbers.slice(2 * i, 2 * (i + 1));
    map.set(key, value);
  });
  return map;
};

const Factors: React.FC<{ factorsMap: Map<number, number> }> = ({
  factorsMap,
}) => {
  const factorsList = [...factorsMap.entries()].sort((f, s) => f[0] - s[0]);
  return (
    <>
      {factorsList.map(([x, n], index) => (
        <Factor
          base={x}
          exponent={n}
          last={index === factorsList.length - 1}
          key={index}
        />
      ))}
    </>
  );
};

const Factor: React.FC<{ base: number; exponent: number; last: boolean }> = ({
  base,
  exponent,
  last,
}) => {
  return (
    <>
      <span>{base}</span>
      {exponent !== 1 && <span className="exponent">{exponent}</span>}
      {!last && " × "}
    </>
  );
};

export default App;
