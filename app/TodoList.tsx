"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../model/todo";
import useTodoStore from "@/store/store";

export default function TodoList() {
  const { todos, addTodo, deleteTodo } = useTodoStore((state: any) => state);

  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="bg-slate-100 w-3/4 px-2 py-2 mb-2 flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <button
              className="text-slate-100 bg-red-500 px-2 rounded-md"
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
