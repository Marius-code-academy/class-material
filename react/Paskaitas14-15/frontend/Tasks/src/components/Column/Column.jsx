import React, { useState } from "react";
import styles from "./Column.module.css";
import Task from "../Task/Task";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

export default function Column({ columnData, tasks, columns, getTasks }) {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  return (
    <div className={styles.column}>
      <h4 className={styles.heading}>{columnData.title}</h4>
      {columnData.order === 0 && !showNewTaskForm && <button onClick={() => setShowNewTaskForm(true)}>+</button>}
      {showNewTaskForm && <NewTaskForm setShowNewTaskForm={setShowNewTaskForm} getTasks={getTasks} columnId={columnData._id} />}
      {tasks.map((task) => {
        return <Task getTasks={getTasks} columns={columns} key={task._id} task={task} />;
      })}
    </div>
  );
}
