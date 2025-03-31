import axios from "axios";

type Something = {
  name: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title?: string;
  completed: boolean;
  something: Something;
};

const todoUrl = "https://jsonplaceholder.typicode.com/todos";
export async function getTodoById(id: number) {
  const { data } = await axios.get<Todo>(todoUrl + `/${id}`);

  return data;
}

export async function getTodos() {
  const { data } = await axios.get<Todo[]>(todoUrl);

  return data;
}
