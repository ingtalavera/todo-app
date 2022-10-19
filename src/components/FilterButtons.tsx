import { useTodosStore } from "../store/todos";

export const FilterButtons = () => {

  const changeFilter = useTodosStore(state => state.changeFilter);
  const filter = useTodosStore(state => state.filter);

  const classFilter = (value: string) => {
    return filter === value
      ? 'text-primary'
      : 'text-dark-grayish-blue'
  }

  return (
    <>
      <button
        className={`text-sm font-bold hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue ${classFilter('All')}`}
        onClick={() => changeFilter('All')}
      >
        All
      </button>
      <button
        className={`text-sm font-bold hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue ${classFilter('Active')}`}
        onClick={() => changeFilter('Active')}
      >
        Active
      </button>
      <button
        className={`text-sm font-bold hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue ${classFilter('Completed')}`}
        onClick={() => changeFilter('Completed')}
      >
        Completed
      </button>
    </>
  );
};

