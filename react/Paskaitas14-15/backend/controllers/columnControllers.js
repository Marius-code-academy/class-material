import ColumnModel from "../Models/ColumnModel.js";
import TaskModel from "../Models/TaskModel.js";

export async function getColumns(req, res) {
  try {
    const columns = await ColumnModel.find({}, { __v: 0 });
    res.json(columns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createColumn(req, res) {
  const columnInfo = req.body;
  try {
    const columns = await ColumnModel.find();
    const biggestOrder = columns.reduce((acc, column) => {
      if (column.order > acc) {
        return column.order;
      } else {
        return acc;
      }
    }, 0);
    const newColumn = new ColumnModel({
      title: columnInfo.title,
      order: biggestOrder + 1,
    });
    await newColumn.save();

    res.status(201).json(newColumn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteColumnById(req, res) {
  const { id } = req.params;
  try {
    const column = await ColumnModel.findById(id);

    if (!column) {
      return res.status(404).json({ message: "Column not found" });
    }

    const columnTasks = await TaskModel.deleteMany({ column: id });

    const deletedColum = await column.deleteOne();

    res.json(deletedColum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
