import client from "./db/db.js";

export async function getAllUsers(req, res) {
  const result = await client.query("select * from users");

  res.json(result.rows);
}
