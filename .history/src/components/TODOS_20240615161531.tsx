"use client";

import React from "react";
import { useTodoContext } from "@/app/Context/store/add-todos";

const TODOS = () => {
  const { todos } = useTodoContext();
  const fltertodo = todos;
 
  return (
    <ul className="">
        {
            fltertodo.map(())
        }

    </ul>
  );
};

export default TODOS;
