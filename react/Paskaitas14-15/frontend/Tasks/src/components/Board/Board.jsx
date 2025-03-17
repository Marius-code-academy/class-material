import { useEffect, useState } from "react";
import axios from "axios";
import Column from "../Column/Column";
import styles from "./Board.module.css";

const API_HOST = import.meta.env.VITE_API_URL;

export default function Board() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/column`)
      .then((response) => setColumns(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.columnWrapper}>
      {columns.map((column) => (
        <Column columnData={column} key={column._id} />
      ))}
    </div>
  );
}
