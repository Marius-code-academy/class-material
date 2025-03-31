import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Todos from "./components/Todos/Todos";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState<undefined | string>();

  function getArrayFirstElement<T>(arr: T[]) {
    return arr[0];
  }

  const firstElement = getArrayFirstElement(["asdf", 123]);

  const firstElement2 = getArrayFirstElement<number | string>(["asdf", 123]);

  return (
    <>
      <Todos />
      <button onClick={() => setName(undefined)}>Delete name</button>
      <button onClick={() => setName("Marius")}>Set my name</button>
      <div>
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
