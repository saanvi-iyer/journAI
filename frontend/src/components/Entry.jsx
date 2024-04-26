import React from "react";
import { useNavigate } from "react-router-dom";
import { Expand } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Shrink } from "lucide-react";

const Entry = ({ maximize, handleMaximize, entryData }) => {
  const [selectedPencil, setSelectedPencil] = useState(false);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  function Edit() {
    navigate("/edit");
  }
  const toggleSelectedPencil = () => {
    setSelected(!selectedPencil);
  };
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`flex ${maximize ? " z-[50] h-fit w-[90vw]" : "h-[70vh] w-[68vw]"} flex-col overflow-auto rounded-xl bg-white p-4 `}
    >
      <div className="flex items-center justify-between">
        <span className="mb-0.5 text-3xl text-deep-blue">
          {entryData.title}
        </span>
        <div className="flex gap-x-4">
          <a href={`?id=${entryData._id}`}>
            <Pencil
              onClick={Edit}
              fill={selectedPencil ? "#F2D382" : "white"}
              className=" w-[20px] hover:cursor-pointer hover:fill-violet active:scale-95"
              color="#0F2851"
            />
          </a>
          {maximize ? (
            <Shrink
              onClick={handleMaximize}
              className="w-[20px] hover:cursor-pointer active:scale-95"
              color="#0F2851"
            />
          ) : (
            <Expand
              onClick={handleMaximize}
              className="w-[20px] hover:cursor-pointer active:scale-95"
              color="#0F2851"
            />
          )}
          <Star
            onClick={toggleSelected}
            fill={selected ? "#F2D382" : "white"}
            className=" w-[22px] hover:cursor-pointer hover:fill-[#F2D382] active:scale-95"
            color="#0F2851"
          />
          <Trash2 className="-ml-1 w-[20px]" color="#FF4747" />
        </div>
      </div>
      <div className="my-1.5 h-0.5 w-full overflow-auto bg-violet/60" />
      <p className="pl-1 text-dark-grey">{entryData.date}</p>
      <p className="mb-5 ml-1 mt-3 w-fit">{entryData.description}</p>
      <div className="mb-2 ml-1 mt-auto flex justify-start gap-x-4">
        {entryData.emotion_tags.map((tag) => {
          return (
            <div className="rounded bg-light-blue px-4 py-1.5 font-medium">
              <p className="text-deep-blue">{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Entry;
