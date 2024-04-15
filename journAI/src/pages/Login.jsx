import { useState } from "react";
// import "./App.css";
// import "./index.css";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
//import logo from "./assets/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background w-screen h-screen flex justify-center items-center">
        <div className="bg-white lg:h-[80%] h-[60%] lg:w-[27%] w-[80%] rounded-[12px] flex flex-col justify-center items-center gap-y-6">
          <div className="flex gap-x-4 items-center">
            <img className="w-[35px]" src={logo} alt="logo" />
            <p className="text-violet text-lg">JournAI</p>
          </div>
          <div className="flex flex-col gap-y-1.5 text-center">
            <p className="text-deep-blue">Welcome back!</p>
            <p className="text-xs text-[#8B8D97]">Login to your account</p>
          </div>
          <div className="flex w-full flex-col gap-y-3 justify-center items-center">
            <div className="relative w-full ml-[65px]">
              <input
                type="email"
                className="bg-[#EFF1F9] w-[80%] h-[40px] rounded-[8px] pl-12 placeholder:text-dust-grey pb-0.5 text-sm"
                placeholder="Email ID"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail color="#B0B2C3" size={16} />
              </div>
            </div>
            <div className="relative w-full ml-[65px]">
              <input
                type="password"
                className="bg-[#EFF1F9] w-[80%] h-[40px] rounded-[8px] pl-12 placeholder:text-dust-grey pb-0.5 text-sm"
                placeholder="Password"
              />
              <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                <Lock color="#B0B2C3" size={16} />
              </div>
              <div className="flex w-[80%] justify-end">
                <p className="text-purple-plum text-xs">Recover Password</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-deep-blue text-sm">
              Don't have an account?{" "}
            </span>
            <span className="text-purple-plum text-sm">Sign up</span>
          </div>
          <div className="border-purple-plum border-[1.5px] bg-lilac-petals w-[40%] h-[40px] text-purple-plum flex justify-center items-center pb-1 rounded-[10px] cursor-pointer hover:bg-purple-plum hover:text-white">
            <p className=" ">Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
