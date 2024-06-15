import TODOS from "@/components/TODOS";
import AddTODO from "@/components/add-todo";
import React from "react";

const Page = () => {
  return (
    <main>
      <h2 className="">TODO NEXT + TYPESCRIPT</h2>
      <AddTODO />
      <TODOSOS />
    </main>
  );
};

export default Page;
