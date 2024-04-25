import { useRef } from "react";
import { useState } from "react";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
import InputBox from "../components/InputBox";
import axios from "axios";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/signup`,
        formData,
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="background flex h-screen w-screen items-center justify-center">
        <div className="flex h-[60%] min-h-fit w-[80%] flex-col items-center justify-center gap-y-6 rounded-[12px] bg-white  lg:h-[90%] lg:w-[27%]">
          <div className="flex items-center gap-x-3">
            <img className="" src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-y-1.5 text-center">
            <div>
              <span className="text-xl text-deep-blue ">Get Started with </span>
              <span className="text-2xl font-semibold text-violet">
                JournAI
              </span>
            </div>
            <p className="text-sm text-[#8B8D97]">Create your account</p>
          </div>
          <div className="flex w-full flex-col items-center  gap-y-4 px-8">
            <InputBox
              names="Name"
              types="text"
              inputRef={nameRef}
              icons={<User color="#B0B2C3" size={16} />}
            />
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
            <div>
              <span className="text-sm text-deep-blue">
                Already have an account?{" "}
              </span>
              <a href="/login">
                <span className="text-sm text-purple-plum">Login</span>
              </a>
            </div>
            <button
              onClick={handleSubmit}
              className="flex h-[40px] w-[40%] cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-purple-plum bg-lilac-petals pb-1 text-purple-plum hover:bg-purple-plum hover:text-white"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
