import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Star } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Create = () => {
  const [selected, setSelected] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  function Home() {
    navigate("/home");
  }
  function Edit() {
    navigate("/edit");
  }
  const handleSave = () =>
    MySwal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  const handleDelete = () =>
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="background max-w-screen flex min-h-screen flex-col ">
      <Navbar />

      <div className="mt-[10vh] flex items-center px-[2%] py-[2%]">
        <ChevronLeft
          onClick={Home}
          className="mb-1 ml-[-10px] mt-2.5"
          size={32}
          color="#0F2851"
        />
        <p className="ml-[12px] text-4xl font-semibold text-deep-blue ">
          Create Entry
        </p>
      </div>
      <div className="mx-auto flex h-[70vh] w-[90vw] flex-col overflow-auto rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="mb-0.5 text-3xl text-deep-blue">Add Title</span>
          <div className="flex gap-x-4">
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
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div
            onClick={handleSave}
            className="bg-water flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none text-center text-white hover:bg-turquoise"
          >
            <p className="text-md h-auto w-full">Save Changes</p>
          </div>
          <div
            onClick={handleDelete}
            className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-alert text-center text-white hover:bg-[#FF6464] "
          >
            <p className="text-md h-auto w-full">Delete Entry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
