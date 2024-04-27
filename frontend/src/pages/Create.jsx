import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Star } from "lucide-react";
import { ChevronLeft, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Create = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [emotionTags, setEmotionTags] = useState([]);
  const [emotionList, setEmotionList] = useState([
    "Happy",
    "Sad",
    "Excited",
    "Calm",
    "Frustrated",
  ]);
  const [selected, setSelected] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Function to get today's date
  const getTodayDate = () => {
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    getTodayDate();
  }, []);

  // Function to add an emotion tag
  const addEmotionTag = (tag) => {
    setEmotionTags([...emotionTags, tag]);
  };

  // Function to remove an emotion tag
  const removeEmotionTag = (tag) => {
    setEmotionTags(emotionTags.filter((t) => t !== tag));
    setEmotionList([...emotionList, tag]); 
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const access_token = localStorage.getItem("access_token");
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const formData = {
      title: title,
      date: currentDate.toString(),
      description: description,
      is_starred: selected,
      emotion_tags: emotionTags,
    };
    axios
      .post("http://localhost:3000/api/entry/create", formData, {
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

  // Function to handle deletion of entry
  const handleDelete = () => {
    MySwal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteEntry();
        MySwal.fire({
          title: "Deleted!",
          text: "Your entry has been deleted.",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  // Function to handle saving success message
  const handleSave = () => {
    MySwal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Function to delete entry
  const handleDeleteEntry = () => {
    const access_token = localStorage.getItem("access_token");
    const entryId = localStorage.getItem("_id");

    axios
      .delete(`http://localhost:3000/api/entry/delete/${entryId}`, {
        headers: { Authorization: access_token },
      })
      .then((response) => {
        console.log("Entry deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
      });
  };

  return (
    <div className="background max-w-screen flex min-h-screen flex-col ">
      <Navbar />
      <div className="mt-[10vh] flex items-center px-[2%] py-[2%]">
        <ChevronLeft
          onClick={() => navigate("/home")}
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
          <input
            className="mb-0.5 w-full text-3xl text-deep-blue outline-none"
            placeholder="Add Title"
            ref={titleRef}
          />
          <div className="flex gap-x-4">
            <Star
              onClick={() => setSelected(!selected)}
              fill={selected ? "#F2D382" : "white"}
              className=" w-[22px] hover:cursor-pointer hover:fill-[#F2D382] active:scale-95"
              color="#0F2851"
            />
          </div>
        </div>
        <div className="my-1.5 h-1 w-full overflow-auto  bg-violet/60" />
        <p className="pl-1 text-dark-grey">{currentDate}</p>
        <div className="h-[45%]">
          <textarea
            className="ml-1 mt-3 w-full outline-none"
            ref={descriptionRef}
            rows={7}
          />
        </div>
        <div className="mt-16 flex flex-col gap-y-4">
          <div className="flex flex-row gap-x-4">
            {emotionTags.map((tag) => (
              <div
                key={tag}
                className="flex w-fit gap-x-4 rounded bg-alert px-4 py-1.5 font-medium hover:cursor-pointer"
                onClick={() => removeEmotionTag(tag)}
              >
                <p className="text-deep-blue">{tag}</p>
                <Minus />
              </div>
            ))}
          </div>

          <p className="ml-1.5 flex font-bold">Add Emotion Tags</p>
          <div className="mb-2 ml-1 mt-auto flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-4">
              {emotionList.map((tag) => (
                <div
                  key={tag}
                  className="flex w-fit gap-x-4 rounded bg-light-blue px-4 py-1.5 font-medium hover:cursor-pointer"
                  onClick={() => {
                    addEmotionTag(tag);
                    setEmotionList(emotionList.filter((item) => item !== tag));
                  }}
                >
                  <p className="text-deep-blue">{tag}</p>
                  <Plus />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div
            onClick={handleSubmit}
            className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-water text-center text-white hover:bg-turquoise"
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
