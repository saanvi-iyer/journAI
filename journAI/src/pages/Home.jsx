import { useState } from "react";
import { Star } from "lucide-react";
import logo from "../assets/logo.svg";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import { Calendar } from "../components/ui/calendar";
import { Expand } from "lucide-react";
import Entry from "../components/Entry";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background max-w-screen flex min-h-screen flex-col ">
        <Navbar />
        <div className="mt-[10vh] px-[2.5%]  py-[2%]">
          <p className="text-4xl font-semibold text-deep-blue">
            Welcome, Saanvi
          </p>
        </div>
        <div className="flex justify-evenly">
          <Entry />
          <div className="flex h-[70vh] flex-col gap-y-4">
          <div className="flex min-h-10 w-full cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-violet bg-white text-center text-violet hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                New Entry
              </div>
            <div className="bg-white ">
              <Calendar className="" />
            </div>
            <div className="my-auto flex items-center justify-around gap-2">
              <div className="flex h-10 w-[50%] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-violet bg-white text-center text-violet hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                Previous
              </div>
              <div className="flex h-10 w-[50%] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-violet bg-white text-center text-violet hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
