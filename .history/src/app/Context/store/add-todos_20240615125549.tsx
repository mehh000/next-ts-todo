import { ReactNode, createContext, useState } from "react";


type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
  };
  


//i made the context now need tp make the Provider
 export const todosContext = createContext(null)


 //this is the  provider

 export const TodoProvider = (children: {children:ReactNode})=>{

  const [todo, setTodo] = useState("");


  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      task,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

 }
