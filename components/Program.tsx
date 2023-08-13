import React from "react";
import ProgramTemplate from "./ProgramTemplate";

const Program = () => {
  return (
    <>
      <div id="program" className="w-[80%] mx-auto py-16">
        <div className="flex flex-col items-center">
          <ProgramTemplate />
        </div>
      </div>
    </>
  );
};

export default Program;
