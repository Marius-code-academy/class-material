import { useEffect, useState } from "react";
import { getTodoById, Todo } from "../../api/todoApi";

export default function Todos() {
  const [todo, setTodo] = useState<Todo | undefined>();

  useEffect(() => {
    getTodoById(1).then((todo) => setTodo(todo));
  }, []);

  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  );
}
