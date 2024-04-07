import { Todo } from "@/model/todo";
import { create, useStore } from "zustand";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
}
const useTodoStore = create<TodoStore>((set: any) => ({
  todos: [],
  addTodo: (todo: Todo) => {
    set((state: any) => ({ todos: [...state.todos, todo] }));
  },
  deleteTodo: (id: number) => {
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    }));
  },
}));

export default useTodoStore;
