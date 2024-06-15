"use client";

import React from "react";
import { useTodoContext } from "@/app/Context/store/add-todos";

const TODOS = () => {
  const { todos } = useTodoContext();
  const fltertodo
 
  return (
    <ul className="">
      <li className="">
        {''}
      </li>
    </ul>
  );
};

export default TODOS;
