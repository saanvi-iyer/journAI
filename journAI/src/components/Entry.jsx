import React from "react";
import { useNavigate } from "react-router-dom";
import { Expand } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Shrink } from "lucide-react";

const Entry = ({maximize,handleMaximize}) => {
  const [selected, setSelected] = useState(false);
  // const [maximize, setMaximize] = useState(false);
  const navigate = useNavigate();
  function Edit() {
    navigate("/edit");
  }
  const toggleSelected = () => {
    setSelected(!selected);
  };
  // const handleMaximize = () => {
  //   setMaximize(!maximize);
  // };
  return (
    <div
      className={`flex ${maximize ? " z-[50] h-fit w-[90vw]" : "h-[70vh] w-[68vw]"} flex-col overflow-auto rounded-xl bg-white p-4 `}
    >
      <div className="flex items-center justify-between">
        <span className="mb-0.5 text-3xl text-deep-blue">Title</span>
        <div className="flex gap-x-4">
          <Pencil
            onClick={Edit}
            fill={selected ? "#F2D382" : "white"}
            className=" w-[20px] hover:cursor-pointer hover:fill-violet active:scale-95"
            color="#0F2851"
          />
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
      <p className="pl-1 text-dark-grey">Date</p>
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
        voluptas in consequuntur voluptas. Et saepe voluptate sed commodi magni
        qui voluptatem delectus et odio dolor aut soluta molestiae. Aut nemo
        rerum et inventore labore vel corporis voluptas in consequuntur
        voluptas. Et saepe voluptate sed commodi magni qui voluptatem delectus
        et odio dolor aut soluta molestiae. Qui reprehenderit minima est aliquid
        harum sit omnis nihil........ Lorem ipsum dolor sit amet. Et deleniti
        amet qui accusantium autem et nulla voluptas et similique adipisci.
        Necessitatibus beatae et temporibus nobis id quaerat maxime nam
        consequatur voluptas rem dolor voluptatem? Ut reiciendis voluptatum et
        impedit dignissimos sit sequi quia.Necessitatibus beatae et temporibus
        nobis id quaerat maxime nam consequatur voluptas rem dolor voluptatem?
        Aut nemo rerum et inventore labore vel corporis voluptas in consequuntur
        voluptas. Et saepe voluptate sed commodi magni qui voluptatem delectus
        et odio dolor aut soluta molestiae. Aut nemo rerum et inventore labore
        vel corporis voluptas in consequuntur voluptas. Et saepe voluptate sed
        commodi magni qui voluptatem delectus et odio dolor aut soluta
        molestiae. Aut nemo rerum et inventore labore vel corporis voluptas in
        consequuntur voluptas. Et saepe voluptate sed commodi magni qui
        voluptatem delectus et odio dolor aut soluta molestiae. Qui
        reprehenderit minima est aliquid harum sit omnis nihil........
      </p>
      <div className="mb-2 ml-1 mt-auto flex justify-start gap-x-4">
        <div className="rounded bg-light-blue px-4 py-1.5 font-medium">
          <p className="text-deep-blue">Rejuvenated</p>
        </div>
        <div className="rounded bg-light-blue px-4 py-1.5 font-medium">
          <p className="text-deep-blue">Happy</p>
        </div>
        <div className="rounded bg-light-blue px-4 py-1.5 font-medium">
          <p className="text-deep-blue">Energetic</p>
        </div>
      </div>
    </div>
  );
};

export default Entry;
