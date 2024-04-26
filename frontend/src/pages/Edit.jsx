import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

const Edit = () => {
  const [selected, setSelected] = useState(false);
  const [entries, setEntries] = useState();

  const fetchData = async () => {
    const getValueFromSearchParams = (param) => {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get(param);
    };
    const entryId = getValueFromSearchParams("id");

    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        `http://localhost:3000/api/entry/${entryId}`,
        {
          headers: { Authorization: ` ${access_token}` },
        },
      );
      setEntries(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  const handleSubmit = () => {
    const access_token = localStorage.getItem("access_token");
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;
    const emotion_tags = emotionTagsRef.current.value;

    const getValueFromSearchParams = (param) => {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get(param);
    };
    const entryId = getValueFromSearchParams("id");

    const formData = {
      title: title,
      date: date,
      description: description,
      is_starred: !selected,
      emotion_tags: emotion_tags,
    };
    axios
      .put(`http://localhost:3000/api/entry/update/${entryId}`, formData, {
        headers: { Authorization: ` ${access_token}` },
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        handleSave();
        localStorage.setItem("_id", response.data.data._id);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
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
          Edit Entry
        </p>
      </div>
      <div className="mx-auto flex h-[70vh] w-[90vw] flex-col overflow-auto rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <input
            className="mb-0.5 text-3xl text-deep-blue outline-none"
            ref={titleRef}
            defaultValue={entries?.title}
          ></input>
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
        <input
          className="pl-1 text-dark-grey outline-none"
          ref={dateRef}
          defaultValue={entries?.date}
        ></input>
        <div className="h-[45%]">
          <textarea
            className="ml-1 mt-3 w-full outline-none"
            defaultValue={entries?.description}
            ref={descriptionRef}
            rows={7}
          />
        </div>

        <div className="mt-16 flex flex-col gap-y-4">
          <div className="mb-2 ml-1 mt-auto flex justify-start gap-x-4">
            {entries &&
              entries.emotion_tags.map((index, tag) => (
                <div className="flex gap-x-4 rounded bg-alert px-4 py-1.5 font-medium">
                  <p className="text-deep-blue">{index}</p>
                  <Minus />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div
            onClick={handleSave}
            className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-water text-center text-white hover:bg-turquoise"
          >
            <p className="text-md h-auto w-full" onClick={handleSubmit}>
              Save Changes
            </p>
          </div>
          <div className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-alert text-center text-white hover:bg-[#FF6464] ">
            <p className="text-md h-auto w-full">Delete Entry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
