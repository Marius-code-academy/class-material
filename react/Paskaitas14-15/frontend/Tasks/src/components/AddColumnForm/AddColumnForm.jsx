import { useEffect, useRef, useState } from "react";
import styles from "./AddColumnForm.module.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function AddColumnForm({ getColumns }) {
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef();

  async function addNewColumn() {
    setShowInput(false);

    try {
      const body = {
        title: inputRef.current.value,
      };

      await axios.post(`${API_URL}/column`, body);
      getColumns();
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(e) {
    if (e.key === "Enter") {
      addNewColumn();
    }
  }

  function handleButtonClick() {
    setShowInput(true);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div>
      {!showInput && (
        <button className={styles.addButton} onClick={handleButtonClick}>
          +
        </button>
      )}
      {showInput && <input onKeyDown={handleInputChange} ref={inputRef} onBlur={addNewColumn} type="text" />}
    </div>
  );
}
