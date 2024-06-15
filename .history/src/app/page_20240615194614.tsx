import TODOS from "@/components/TODOS";
import AddTODO from "@/components/add-todo";
import React from "react";

const Page = () => {
  return (
    <main className="flex items-center flex-col mt-" >
      <h2 className="">TODO NEXT + TYPESCRIPT</h2>
      <AddTODO />
      <TODOS />
    </main>
  );
};

export default Page;
