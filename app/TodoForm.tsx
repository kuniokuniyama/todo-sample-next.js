"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../model/todo";
import useTodoStore from "@/store/store";

export default function TodoForm() {
  const { todos, addTodo, deleteTodo } = useTodoStore((state: any) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    const newTodo: Todo = {
      id: Math.random(),
      title: data.title,
      deleted: false,
    };
    addTodo(newTodo);
    reset({ title: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          id="title"
          className="border-2 border-slate-900"
          {...register("title")}
        />
        <button
          type="submit"
          className="ml-6 text-slate-100 bg-blue-700 px-3 py-1 rounded-md"
        >
          add
        </button>
      </div>
    </form>
  );
}
