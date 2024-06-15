'use client'


import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

//i made the context now need tp make the Provider
export const todosContext = createContext<TodosContextType | undefined>(
  undefined
);

//this is the  provider

export const TodoProvider = ({children}: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      task,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  console.log(to);

  return (
    <todosContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </todosContext.Provider>
  );
};
export const useTodoContext = () => {
  const context = useContext(todosContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};