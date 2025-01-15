import { v4 as uuidv4 } from "uuid";

let userDatabase = [
  {
    id: uuidv4(),
    name: "Tadas",
    surname: "Tadauskas",
    age: 25,
  },
  {
    id: uuidv4(),
    name: "Jonas",
    surname: "Jonaitis",
    age: 35,
  },
  {
    id: uuidv4(),
    name: "Petras",
    surname: "Petraitis",
    age: 45,
  },
];

export function getUsers(req, res) {
  const { limit, minAge, maxAge } = req.query;
  let usersResponse = [...userDatabase];

  if (minAge !== undefined) {
    usersResponse = usersResponse.filter((user) => user.age >= minAge);
  }

  if (maxAge !== undefined) {
    usersResponse = usersResponse.filter((user) => user.age <= maxAge);
  }

  if (limit !== undefined) {
    usersResponse = usersResponse.slice(0, limit);
  }

  res.json(usersResponse);
}

export function createUser(req, res) {
  const user = req.body;
  const newUser = {
    ...user,
    id: uuidv4(),
  };
  userDatabase.push(newUser);

  res.json(newUser);
}

export function updateAllUsersAges(req, res) {
  const { age } = req.body;

  userDatabase = userDatabase.map((user) => {
    return {
      ...user,
      age,
    };
  });

  res.json(userDatabase);
}

export function deleteAllUsers(req, res) {
  userDatabase = [];

  res.json({ message: "All users deleted" });
}
