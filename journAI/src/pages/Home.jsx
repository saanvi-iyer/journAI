import { useState } from "react";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
import logo from "../assets/logo.svg";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background w-screen h-screen flex flex-col ">
        <Navbar />
        <div className="mt-[10vh] p-[3%]  ">
          <p className="text-5xl text-deep-blue">Welcome, Saanvi</p>
        </div>
        <div className=" flex">
            <div className=""></div>
            <div className="flex flex-col ">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;
