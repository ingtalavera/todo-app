import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { TODO } from '../interfaces/todoInterfaces';

interface TodosState {
  todos: TODO[]
  filteredTodos: () => TODO[]
  filter: 'All' | 'Active' | 'Completed'
  addTodo: (todo: TODO) => void
  toggleTodo: (todoId: number) => void
  removeTodo: (todoId: number) => void
  clearCompletedTodos: () => void
  changeFilter: (filter: 'All' | 'Active' | 'Completed') => void
}

export const useTodosStore = create<TodosState>()(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        filteredTodos: () => get().todos.filter(todo => {
          switch (get().filter) {
            case 'All':
              return true;
            case 'Active':
              return !todo.done;
            case 'Completed':
              return todo.done
          }
        }),
        filter: 'All',
        addTodo: (todo) => set({ todos: [...get().todos, todo] }),
        toggleTodo: (todoId) => set((state) => ({
          todos: state.todos.map(todo => {
            if (todo.id === todoId) {
              return {
                ...todo,
                done: !todo.done
              };
            }
            return todo;
          })
        })),
        removeTodo: (todoId) => set((state) => ({
          todos: state.todos.filter(todo => {
            return todo.id !== todoId;
          })
        })),
        clearCompletedTodos: () => set((state) => ({
          todos: state.todos.filter(todo => {
            return !todo.done;
          })
        })),
        changeFilter: (filter) => set(() => ({
          filter: filter
        }))
      }),
      {
        name: 'todo-storage'
      }
    ))
);
