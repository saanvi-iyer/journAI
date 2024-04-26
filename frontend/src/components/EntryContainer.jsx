import React from "react";

const EntryContainer = (props) => {
  return (
    <div className="flex z-[25] m-4  min-h-fit w-[25vw] rounded-lg bg-white px-4 py-4 ">
      <div className="items-left flex flex-col gap-y-3 min-h-fit">
        <span className=" text-3xl text-deep-blue">{props.title}</span>
        <p className="pl-1 text-dark-grey">{props.date}</p>
      </div>
    </div>
  );
};

export default EntryContainer;
