import React from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full bg-white flex h-[10vh] fixed top-0 justify-between">
      <div className="flex items-center pl-4">
        <img className="h-fit w-[30px]" src={logo} alt="logo" />
        <p className="text-violet text-2xl pl-4 pb-1">JournAI</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full bg-lilac-petals h-10 flex px-4 gap-x-32 rounded-lg justify-center items-center ">
          <p className="text-purple-plum text-xl">Search Entry...</p>
          <Search color="#6648DB" />
        </div>
        <User className="h-10 w-auto mx-4" color="#D0D1FF" />
      </div>
      
    </div>
  );
};

export default Navbar;
