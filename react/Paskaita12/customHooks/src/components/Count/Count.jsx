import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Count() {
  const { item: count, setItem: setCount } = useLocalStorage("count", 33);

  function addToCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addToCount}>add</button>
    </div>
  );
}
