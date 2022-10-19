import { SIZES } from "../constants";
import { useTodosStore } from "../store/todos";
import { FilterButtons } from "./FilterButtons";


export const TodoFooter = () => {
  const todos = useTodosStore(state => state.todos);
  const clearCompletedTodos = useTodosStore(state => state.clearCompletedTodos)

  const activeTodosCount = todos.filter(todo => !todo.done).length;

  const handleClick = () => {
    clearCompletedTodos();
  }

  return (
    <li
      className="px-5 flex space-x-3 items-center text-xs justify-between text-dark-grayish-blue"
      style={{
        paddingTop: SIZES.paddingVertical,
        paddingBottom: SIZES.paddingVertical
      }}
    >
      {
        todos.length > 0
          ? (
            <>
              <span>
                {activeTodosCount} items left
              </span>
              <div className="hidden sm:block space-x-3">
                <FilterButtons />
              </div>
              <button
                className="hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue"
                onClick={handleClick}
              >
                Clear Completed
              </button>
            </>
          )
          : <span>Nothing to do</span>
      }
    </li>
  );
};

