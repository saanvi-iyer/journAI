import { useState } from "react";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useRef
 } from "react";
function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        formData,
      );
      console.log(response.data);
      localStorage.setItem("access_token",response.data.data.access_token)
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
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
              inputRef={emailRef}
              icons={<Mail color="#B0B2C3" size={16} />}
            />
            <InputBox
              names="Password"
              types="password"
              inputRef={passwordRef}
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

          <button
            onClick={handleSubmit}
            className="border-purple-plum border-[1.5px] bg-lilac-petals w-[40%] h-[40px] text-purple-plum flex justify-center items-center pb-1 rounded-[10px] cursor-pointer hover:bg-purple-plum hover:text-white"
          >
            <p className=" ">Login</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
