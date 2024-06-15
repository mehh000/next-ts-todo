'use client'



import React, { useState } from "react";

const AddTODO = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
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
