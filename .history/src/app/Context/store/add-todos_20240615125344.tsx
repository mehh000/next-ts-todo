import { ReactNode, createContext, useState } from "react";


type Todo = {
    id: string;
    tesk: string;
    completed: boolean;
    createdAt: Date;
}


//i made the context now need tp make the Provider
 export const todosContext = createContext(null)


 //this is the  provider

 export const TodoProvider = (children: {children:ReactNode})=>{

  const [todo, setTodo] = useState("");


    const handleADDTodo = (tesk:string) =>{
        setTodo((prev) =>{
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                tesk,
                completed: false,
                createdAt: new Date()
            },
            ...prev
        ]})
        return newTodos
    }
 }
