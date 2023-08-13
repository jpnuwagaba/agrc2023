import React from "react";

const ProgramTemplate = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row flex-wrap items-center gap-3">
          <div className="text-center hover:cursor-pointer bg-darkRed text-sm font-bold px-3 py-2 rounded sm uppercase text-white">
            monday 14
          </div>
          <div className="text-center hover:cursor-pointer bg-darkGreen text-sm font-bold px-3 py-2 rounded sm uppercase text-white">
            tuesday 15
          </div>
          <div className="text-center hover:cursor-pointer bg-darkGreen text-sm font-bold px-3 py-2 rounded sm uppercase text-white">
            wednesday 16
          </div>
          <div className="text-center hover:cursor-pointer bg-darkGreen text-sm font-bold px-3 py-2 rounded sm uppercase text-white">
            thursday 17
          </div>
          <div className="text-center hover:cursor-pointer bg-darkGreen text-sm font-bold px-3 py-2 rounded sm uppercase text-white">
            friday 18
          </div>
        </div>
      </div>
      <hr className="my-3 w-full border-darkRed shadow" />
    </div>
  );
};

export default ProgramTemplate;
