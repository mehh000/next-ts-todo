'use client';

import React from 'react';
import { useTodoContext } from '@/app/Context/store/add-todos'; // Adjust the import path accordingly

const TODOS: React.FC = () => {
  const { todos, toggleTodosCompleted, handleTodoClicke } = useTodoContext();

  return (
    <ul className="flex flex-col gap-2 w-[500px] p-4 bg-white rounded-lg shadow-md">
      {todos.map((todo) => (
        <li
          className={`flex items-center justify-between p-2 border-b ${
            todo.completed ? 'bg-green-100' : 'bg-white'
          }`}
          key={todo.id}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodosCompleted(todo.id)}
              className="mr-2"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`flex-grow ${
                todo.completed ? 'line-through text-gray-500' : 'text-black'
              }`}
            >
              {todo.task}
            </label>
          </div>
          {todo.completed && (
            <button
              className="bg-red-500 text-white p-1 rounded-md hover:bg-red-800 transition duration-300"
              type="button"
              onClick={() => handleTodoClicke(todo.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TODOS;
