import { TodoFilter, TodoForm, TodoHeader, TodoList } from "./components";
import { useThemeStore } from "./store/theme";

export const TodoApp = () => {

  const dark = useThemeStore(state => state.dark)

  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <main className="px-6 max-w-xl mx-auto">

      <TodoHeader />

      <TodoForm />

      <TodoList />

      <TodoFilter />
    </main>
  );
};

