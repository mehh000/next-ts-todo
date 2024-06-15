'use client'



import React, { useState } from "react";
import { useTodoContext } from "@/app/Context/store/add-todos";

const AddTODO = () => {

    const {handleAddTodo} = useTodoContext()

    const [todo, setTodo] = useState("");
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleAddTodo(todo);
    setTodo("");
  }


  return (
    <form action="" onSubmit={handleSubmit} className="">
      <input
        type="text"
        name=""
        placeholder="add your todo"
        id=""
        className=""
       value={todo} 
       onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit" className="">
        ADD
      </button>
    </form>
  );
};

export default AddTODO;
