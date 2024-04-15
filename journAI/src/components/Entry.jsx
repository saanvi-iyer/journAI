import React from "react";
import { Expand } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";
import { Pencil } from "lucide-react";

const Entry = () => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div>
      <div className=" h-[70vh] w-[60vw] bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl text-deep-blue">Title</span>
          <div className="flex gap-x-4">
            <Pencil className="w-[20px]" color="#0F2851" />
            <Expand className="w-[20px]" color="#0F2851" />
            <Star
              onClick={toggleSelected}
              fill={selected ? "#F2D382" : "white"}
              className="hover:cursor-pointer hover:fill-[#F2D382] active:scale-95     "
              color="#0F2851"
            />
          </div>
        </div>
        <div className="my-1.5 h-0.5 w-full bg-violet/60" />
        <p className="text-dark-grey pl-1">Date</p>
      </div>
    </div>
  );
};

export default Entry;
