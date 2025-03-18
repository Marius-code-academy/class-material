import styles from "./Task.module.css";
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_URL;

export default function Task({ task, columns, getTasks }) {
  async function handleColumnChange(e) {
    try {
      const body = {
        title: task.title,
        description: task.description,
        estimation: task.estimation,
        column: e.target.value,
      };

      await axios.put(`${API_HOST}/task/${task._id}`, body);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.task}>
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <p>{task.estimation}</p>
      <select value={task.column} onChange={handleColumnChange}>
        {columns.map((column) => {
          return (
            <option key={`${task._id}-${column._id}`} value={column._id}>
              {column.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
