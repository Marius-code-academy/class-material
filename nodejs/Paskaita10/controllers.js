import client from "./db/db.js";

export async function getCars(req, res) {
  const { maxYear, minYear, order, pageSize = 10, page = 1 } = req.query;

  let query = "select id, make, year, brand from cars";

  if (maxYear || minYear) {
    query += " where";
    if (maxYear) {
      query += ` year < ${maxYear}`;
    }
    if (maxYear && minYear) {
      query += ` and year > ${minYear}`;
    } else if (minYear) {
      query += ` year > ${minYear}`;
    }
  }

  if (order) {
    query += ` order by year ${order}`;
  }

  query += ` limit ${pageSize} offset ${pageSize * (page - 1)}`;
  console.log(query);

  try {
    const { rows } = await client.query(query);

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getCarById(req, res) {
  const { id } = req.params;

  try {
    const { rows } = await client.query(`select id, make, year, brand from cars where id=${id}`);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function createNewCar(req, res) {
  const { make, year, brand } = req.body;

  try {
    const { rows } = await client.query(
      `
        insert into cars (brand, year, make)
        values ('${brand}', ${year}, '${make}')
        returning id, brand, year, make
      `,
    );

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateCarById(req, res) {
  const { id } = req.params;
  const { make, year, brand } = req.body;

  try {
    const { rows } = await client.query(`
        update cars
        set year=${year}, brand='${brand}', make='${make}'
        where id=${id}
        returning id, brand, year, make
      `);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteCarById(req, res) {
  const { id } = req.params;

  try {
    const { rows } = await client.query(`delete from cars where id=${id} returning id, brand, year, make`);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
