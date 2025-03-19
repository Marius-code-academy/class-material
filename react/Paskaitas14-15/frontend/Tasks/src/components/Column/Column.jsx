import React, { useState } from "react";
import styles from "./Column.module.css";
import Task from "../Task/Task";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Column({ columnData, tasks, columns, getTasks, getColumns }) {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  async function deleteColumn() {
    try {
      const { data: currentTasks } = await axios.get(`${API_URL}/task?columnId=${columnData._id}`);
      if (currentTasks.length > 0) {
        const userResponse = confirm(`You have ${currentTasks.length} in this column. Are you sure you want to delete?`);

        if (userResponse) {
          await axios.delete(`${API_URL}/column/${columnData._id}`);
          getColumns();
        }
      } else {
        await axios.delete(`${API_URL}/column/${columnData._id}`);
        getColumns();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.column}>
      <h4 className={styles.heading}>
        {columnData.title} <button onClick={deleteColumn}>Delete</button>
      </h4>

      {columnData.order === 0 && !showNewTaskForm && <button onClick={() => setShowNewTaskForm(true)}>+</button>}
      {showNewTaskForm && <NewTaskForm setShowNewTaskForm={setShowNewTaskForm} getTasks={getTasks} columnId={columnData._id} />}
      {tasks.map((task) => {
        return <Task getTasks={getTasks} columns={columns} key={task._id} task={task} />;
      })}
    </div>
  );
}
