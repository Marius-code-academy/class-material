import { useEffect, useRef, useState } from "react";
import SomeOtherComponent from "../SomeOtherCOmponent/SomeOtherComponent";

export default function Form() {
  const [number, setNumber] = useState(0);
  const x = 5;
  const inputRef = useRef();
  const refNumber = useRef(0);

  console.log(inputRef.current);

  function hinghlightButtonClick() {
    inputRef.current.focus();
  }

  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      console.log("Timer happened");
    }, [2000]);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <SomeOtherComponent />
      <button onClick={hinghlightButtonClick}>Highlight input</button>
      <input ref={inputRef} type="text" /> <br />
      <button
        onClick={() => {
          ++refNumber.current;
          console.log(refNumber.current);
        }}
      >
        {refNumber.current}
      </button>
    </div>
  );
}
