'use client'



import React, { useState } from "react";

const AddTODO = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit =(e)=>{
    
  }


  return (
    <form action="" on className="">
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
