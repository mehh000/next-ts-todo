"use client";

import React from "react";
import { useTodoContext } from "@/app/Context/store/add-todos";

const TODOS = () => {
  const { todos } = useTodoContext();
  const fltertodo = todos;

  return (
    <ul className="">
      {fltertodo.map((todo) => {
        return (
          <li className="" key={todo.id}>
            {
              <input
                type="checkbox"
                name=""
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={()=> toggleTodosCompleted(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`} >
                {todo.task}
              </label>
              {
                todo/
              }
            }
          </li>
        );
      })}
    </ul>
  );
};

export default TODOS;
