import React from "react";
import { useCountContext } from "../Context/CountContext";

export default function ChildItem() {
  const { count, setCount } = useCountContext();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Labas {count}</button>
    </div>
  );
}
