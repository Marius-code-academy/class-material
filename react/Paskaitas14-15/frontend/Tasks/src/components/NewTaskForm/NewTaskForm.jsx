import axios from "axios";
import React, { useState } from "react";

const API_HOST = import.meta.env.VITE_API_URL;

export default function NewTaskForm({ columnId, getTasks, setShowNewTaskForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimation, setEstimation] = useState(1);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const body = {
        title,
        description,
        estimation,
        column: columnId,
      };

      await axios.post(`${API_HOST}/task`, body);
      setShowNewTaskForm(false);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
      <label>Description</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
      <label>Estimation</label>
      <input type="number" value={estimation} onChange={(e) => setEstimation(e.target.value)} />
      <button type="submit">Submit</button>
      <button onClick={() => setShowNewTaskForm(false)}>Cancel</button>
    </form>
  );
}
