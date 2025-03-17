import TaskModel from "../Models/TaskModel.js";

export async function getTasks(req, res) {
  try {
    const tasks = await TaskModel.find({}, { __v: 0 });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTask(req, res) {
  const taskInfo = req.body;

  try {
    const newTask = new TaskModel(taskInfo);
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
