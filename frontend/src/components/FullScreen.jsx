import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { Star } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";
import { Shrink } from "lucide-react";
import { Trash2 } from "lucide-react";

const FullScreen = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  function Home() {
    navigate("/home");
  }
  function Edit() {
    navigate("/edit");
  }
  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="background max-w-screen flex min-h-screen flex-col ">
      <Navbar />

      <div className="mt-[10vh] flex items-center px-[2%] py-[2%]">
        <ChevronLeft onClick={Home} className="ml-[-10px] mt-2.5 " size={32} />
      </div>
      <div className="mx-auto flex h-[70vh] w-[90vw] flex-col overflow-auto rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="mb-0.5 text-3xl text-deep-blue">Title</span>
          <div className="flex gap-x-4">
            <Shrink onClick={FullScreen} className="w-[20px]" color="#0F2851" />
            <Star
              onClick={toggleSelected}
              fill={selected ? "#F2D382" : "white"}
              className=" w-[22px] hover:cursor-pointer hover:fill-[#F2D382] active:scale-95"
              color="#0F2851"
            />
          </div>
        </div>
        <div className="my-1.5 h-0.5 w-full overflow-auto bg-violet/60" />
        <p className="text-dark-grey pl-1">Date</p>
        <p className="ml-1 mt-3 w-fit">
          Lorem ipsum dolor sit amet. Et deleniti amet qui accusantium autem et
          nulla voluptas et similique adipisci. Necessitatibus beatae et
          temporibus nobis id quaerat maxime nam consequatur voluptas rem dolor
          voluptatem? Ut reiciendis voluptatum et impedit dignissimos sit sequi
          quia.Necessitatibus beatae et temporibus nobis id quaerat maxime nam
          consequatur voluptas rem dolor voluptatem? Aut nemo rerum et inventore
          labore vel corporis voluptas in consequuntur voluptas. Et saepe
          voluptate sed commodi magni qui voluptatem delectus et odio dolor aut
          soluta molestiae. Aut nemo rerum et inventore labore vel corporis
          voluptas in consequuntur voluptas. Et saepe voluptate sed commodi
          magni qui voluptatem delectus et odio dolor aut soluta molestiae. Aut
          nemo rerum et inventore labore vel corporis voluptas in consequuntur
          voluptas. Et saepe voluptate sed commodi magni qui voluptatem delectus
          et odio dolor aut soluta molestiae. Qui reprehenderit minima est
          aliquid harum sit omnis nihil........
        </p>
        <div className="mb-2 ml-1 mt-auto flex justify-start gap-x-4">
          <div className="bg-light-blue rounded px-4 py-1.5 font-medium">
            <p className="text-deep-blue">Rejuvenated</p>
          </div>
          <div className="bg-light-blue rounded px-4 py-1.5 font-medium">
            <p className="text-deep-blue">Happy</p>
          </div>
          <div className="bg-light-blue rounded px-4 py-1.5 font-medium">
            <p className="text-deep-blue">Energetic</p>
          </div>
        </div>
        <div>
          <div
            onClick={Create}
            className="flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border-[1.5px]  border-none bg-purple-plum text-center text-white hover:bg-[#7352F7]"
          >
            <p className="h-auto w-full text-[18px]">New Entry</p>
            <Plus />
          </div>
          <div
            onClick={Create}
            className="flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border-[1.5px]  border-none bg-purple-plum text-center text-white hover:bg-[#7352F7]"
          >
            <p className="h-auto w-full text-[18px]">New Entry</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
