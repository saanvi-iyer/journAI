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
        <div className="mt-[10vh] p-[2%]  ">
          <p className="text-4xl font-semibold text-deep-blue">
            Welcome, Saanvi
          </p>
        </div>
        <div className="flex justify-evenly">
          <Entry/>
          <div className="flex h-[70vh] flex-col gap-y-4">
            <div className="h-[15vh] bg-white "></div>
            <div className="bg-white ">
              <Calendar className="" />
            </div>
            <div className="h-[15vh] bg-white "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
