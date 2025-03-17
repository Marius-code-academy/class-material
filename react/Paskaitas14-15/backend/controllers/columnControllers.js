import ColumnModel from "../Models/ColumnModel.js";

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
    const newColumn = new ColumnModel(columnInfo);
    await newColumn.save();

    res.status(201).json(newColumn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
