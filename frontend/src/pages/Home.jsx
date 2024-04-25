import Navbar from "../components/Navbar";
import { Calendar } from "../components/ui/calendar";
import Entry from "../components/Entry";
import { useNavigate } from "react-router-dom";
import { ChevronFirst } from "lucide-react";
import { ChevronLast } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [maximize, setMaximize] = useState(false);
  function Create() {
    navigate("/create");
  }
  const handleMaximize = () => {
    setMaximize(!maximize);
  };
  return (
    <>
      <div className="background max-w-screen flex min-h-screen flex-col overflow-y-scroll">
        <Navbar />
        <div className="mt-[10vh] px-[3%]  py-[2%]">
          {!maximize && <p className="text-4xl font-semibold text-deep-blue">
            Welcome, Saanvi!
          </p>}
        </div>
        <div className="flex justify-evenly">
          <Entry maximize={maximize} handleMaximize={handleMaximize}/>
          {maximize ? (
            <div />
          ) : (
            <div className="flex h-[70vh] flex-col justify-evenly gap-y-4">
              <div
                onClick={Create}
                className="flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-purple-plum text-center text-white hover:bg-[#7352F7]"
              >
                <p className="h-auto w-full text-[18px]">New Entry</p>
              </div>
              <div className="my-auto rounded-lg bg-white">
                <Calendar className="" />
              </div>
              <div className="flex items-center justify-around gap-2">
                <div className="flex h-10 w-[50%] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-violet bg-white text-center text-violet hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                  <ChevronFirst />
                  <p className="p-2 pt-1.5 text-[18px]">Previous</p>
                </div>
                <div className="flex h-10 w-[50%] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-violet bg-white text-center text-violet hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                  <p className="p-2 pt-1.5 text-[18px]">Next</p>
                  <ChevronLast />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
