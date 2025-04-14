import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { counterSelector, decrement, increment, incrementByAmount } from "./store/slices/counterSlice";
import { AppDispatch } from "./store/store";

function App() {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClickIncrement = () => {
    dispatch(increment());
  };

  const handleOnClickDecrement = () => {
    dispatch(decrement());
  };

  const handleOnClickAddMuch = () => {
    dispatch(incrementByAmount(10));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleOnClickIncrement}>Add</button>
      <button onClick={handleOnClickDecrement}>-</button>
      <button onClick={handleOnClickAddMuch}>Add much</button>
    </div>
  );
}

export default App;
