import { ReactNode, createContext, useState } from "react";


//i made the context now need tp make the Provider
 export const todosContext = createContext(null)


 //this is the  provider

 export const TodoProvider = (children: {children:ReactNode})=>{

  const [todo, setTodo] = useStateState("");


    const handleADDTodo = (tesk:string) =>{

    }
 }