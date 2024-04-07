import Link from "next/link";
import React from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const page = () => {
  return (
    <div className="bg-pink-100 w-1/3 h-screen m-auto py-3 pl-8">
      <p className="text-2xl font-extrabold pb-5">Sample Todo App(國栖)</p>
      <div className="mb-6">
        <TodoForm />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default page;
