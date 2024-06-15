"use client";

import React from "react";
import { useTodoContext } from "@/app/Context/store/add-todos";

const TODOS = () => {
  const { todos,toggleTodosCompleted,handleTodoClicke } = useTodoContext();
  const fltertodo = todos;

  return (
    <ul className="flex flex-col gap-2 w-[500px]">
      {fltertodo.map((todo) => {
        return (
          <li className="flex items-center justify-between border-b-2 "
           key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodosCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-800 " type="button" onClick={() => handleTodoClicke(todo.id)}>
                Delete
              </button>v
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TODOS;
