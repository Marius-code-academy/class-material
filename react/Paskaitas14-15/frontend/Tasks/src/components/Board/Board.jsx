import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Column from "../Column/Column";
import styles from "./Board.module.css";

const API_HOST = import.meta.env.VITE_API_URL;

export default function Board() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  function getTasks() {
    axios
      .get(`${API_HOST}/task`)
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`${API_HOST}/column`)
      .then((response) => setColumns(response.data))
      .catch((err) => console.log(err));

    getTasks();
  }, []);

  console.log(tasks);

  const groupedTasks = useMemo(
    () =>
      tasks.reduce((acc, task) => {
        if (acc[task.column]) {
          acc[task.column].push(task);
        } else {
          acc[task.column] = [task];
        }

        return acc;
      }, {}),
    [tasks],
  );

  return (
    <div className={styles.columnWrapper}>
      {columns.map((column) => (
        <Column getTasks={getTasks} columns={columns} tasks={groupedTasks[column._id] ?? []} columnData={column} key={column._id} />
      ))}
    </div>
  );
}
