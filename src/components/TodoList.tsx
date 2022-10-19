import { useTodosStore } from "../store/todos";
import { TodoFooter } from "./TodoFooter";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  const todos = useTodosStore((state) => state.filteredTodos());

  return (
    <ul className="mt-4 rounded-md bg-light-very-gray overflow-hidden shadow-lg dark:bg-dark-very-desaturated-blue">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
      <TodoFooter />
    </ul>
  );
};

