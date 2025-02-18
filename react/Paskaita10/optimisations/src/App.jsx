import { useCallback, useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import HeavyComponent from "./components/HeavyComponent/HeavyComponent";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000000");
  const [todos, setTodos] = useState([]);

  const sortedTodos = useMemo(() => {
    console.log("Sorting todos");
    return todos.sort((a, b) => a.title.localeCompare(b.title));
  }, [todos]);
  console.log(sortedTodos, "sortedTodos");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const doStuff = useCallback(() => {
    console.log("Doing stuff");
  }, []);

  return (
    <>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <HeavyComponent func={doStuff} />
    </>
  );
}

export default App;
