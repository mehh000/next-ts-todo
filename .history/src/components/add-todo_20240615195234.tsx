// components/AddTODO.tsx

'use client';

import React, { useState } from "react";
import { useTodoContext } from "@/app/Context/store/add-todos"; // Adjust the path according to your project structure

const AddTODO: React.FC = () => {
  const { handleAddTodo } = useTodoContext();

  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-5">
      <input
        type="text"
        placeholder="Add your todo"
        className=" border-2 text-1xl p-2 ring-2 rounded-md w-  "
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
