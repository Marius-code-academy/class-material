import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card, { Komplektacija } from "./components/Card/Card";

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  height: number;
};

function App() {
  const [count, setCount] = useState<number>(0);

  const audiKomplektacija: Komplektacija = {
    cooling: true,
    heating: false,
    turnSignal: false,
  };

  // const x: Person = {
  //   age: 20,
  //   isStudent: true,
  //   name: "Jonas",
  //   height: 180,
  // };

  // const y: Person = {
  //   age: 3152,
  //   isStudent: false,
  //   name: "Petras",
  //   height: 190,
  // };

  return (
    <>
      <div>
        <Card description="askdjfhgaskjdfgh" title="Title">
          asl;dfkj
        </Card>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
