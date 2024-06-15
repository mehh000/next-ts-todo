import { ReactNode, createContext, useState } from "react";


type Todo = {
    id: string;
    tesk: string;
    completed: boolean;
    createdAt: 
}


//i made the context now need tp make the Provider
 export const todosContext = createContext(null)


 //this is the  provider

 export const TodoProvider = (children: {children:ReactNode})=>{

  const [todo, setTodo] = useState("");


    const handleADDTodo = (tesk:string) =>{
        setTodo((prev) =>{
            const newTodos ={
                id: Math.random().toString(),
                tesk,
                complete: false,
                createdAt: new Date()
            }
            ...prev
        })
        return newTodos
    }
 }
