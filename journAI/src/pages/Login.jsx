import { useState } from "react";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
import logo from "../assets/logo.svg";
import InputBox from "../components/InputBox";


function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background w-screen h-screen flex justify-center items-center">
        <div className="bg-white lg:h-[80%] h-[60%] lg:w-[27%] w-[80%] rounded-[12px] flex flex-col justify-center items-center gap-y-6">
          <div className="flex gap-x-4 items-center">
            <img className="" src={logo} alt="logo" />
            <p className="text-violet text-3xl">JournAI</p>
          </div>
          <div className="flex flex-col gap-y-1.5 text-center">
            <p className="text-deep-blue text-lg font-semibold">
              Welcome back!
            </p>
            <p className="text-xs text-[#8B8D97]">Login to your account</p>
          </div>
          <div className="flex w-full flex-col gap-y-4 justify-center items-center px-8">
            <InputBox
              names="Email ID"
              types="email"
              icons={<Mail color="#B0B2C3" size={16} />}
            />
            <InputBox
              names="Password"
              types="password"
              icons={<Lock color="#B0B2C3" size={16} />}
            />
          </div>
          <div>
            <span className="text-deep-blue text-sm">
              Don't have an account?{" "}
            </span>
            <a href="/signup">
              <span className="text-purple-plum text-sm">Sign up</span>
            </a>
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
