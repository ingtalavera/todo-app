import { IconCross } from "../assets";
import { SIZES } from "../constants";
import { TODO } from "../interfaces/todoInterfaces";
import { useTodosStore } from "../store/todos";
import { Checkbox } from "./Checkbox";

export type TodoItemProps = {
  todo: TODO
}

export const TodoItem = ({ todo }: TodoItemProps) => {

  const { toggleTodo, removeTodo } = useTodosStore();


  const handleToggle = () => {
    toggleTodo(todo.id);
  }

  const handleClick = () => {
    removeTodo(todo.id);
  }

  return (
    <li
      className="px-5 flex space-x-3 items-center border-b dark:border-dark-very-grayish-blue"
      style={{
        paddingTop: SIZES.paddingVertical,
        paddingBottom: SIZES.paddingVertical
      }}
    >
      <Checkbox checked={todo.done} onToggle={handleToggle} />
      <span
        className={`flex-1 text-sm text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue ${todo.done && 'line-through text-light-very-grayish-blue dark:text-dark-very-grayish-blue'}`}
        role="button"
        aria-label="todo button"
        onClick={handleToggle}
      >
        {todo.todo}
      </span>
      <button
        onClick={handleClick}
      >
        <img src={IconCross} alt="icon cross" className="h-3 w-3" />
      </button>
    </li>
  );
};

