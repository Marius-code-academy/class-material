import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Column from "../Column/Column";
import styles from "./Board.module.css";
import AddColumnForm from "../AddColumnForm/AddColumnForm";

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

  function getColumns() {
    axios
      .get(`${API_HOST}/column`)
      .then((response) => setColumns(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getColumns();
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
        <Column getColumns={getColumns} getTasks={getTasks} columns={columns} tasks={groupedTasks[column._id] ?? []} columnData={column} key={column._id} />
      ))}
      <AddColumnForm getColumns={getColumns} />
    </div>
  );
}
