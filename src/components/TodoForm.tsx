import { FormEvent, useState } from "react";
import { SIZES } from "../constants";
import { useTodosStore } from "../store/todos";
import { Checkbox } from "./Checkbox";

export const TodoForm = () => {

  const [todo, setTodo] = useState('');
  const addTodo = useTodosStore(state => state.addTodo);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todo.trim().length === 0) return;

    addTodo({
      id: Date.now(),
      todo,
      done: false
    });

    setTodo('');
  }

  return (
    <form
      className="bg-light-very-gray rounded-md px-5 flex space-x-3 mt-7 items-center dark:bg-dark-very-desaturated-blue"
      style={{ paddingTop: SIZES.paddingVertical, paddingBottom: SIZES.paddingVertical }}
      onSubmit={handleSubmit}
    >
      <Checkbox />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="text-sm flex-1 focus:outline-none h-4 bg-transparent dark:text-dark-light-grayish-blue"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

