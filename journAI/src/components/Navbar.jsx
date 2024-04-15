import React from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="fixed z-[100] top-0 flex h-[10vh] w-full justify-between bg-white">
      <div className="flex items-center pl-4">
        <img className="h-fit w-[30px]" src={logo} alt="logo" />
        <p className="pb-1 pl-4 text-2xl text-violet">JournAI</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-10 w-full items-center justify-center gap-x-32 rounded-lg bg-lilac-petals px-4 ">
          <p className="text-xl text-purple-plum">Search Entry...</p>
          <Search color="#6648DB" />
        </div>
        <User className="mx-4 h-10 w-auto" color="#D0D1FF" />
      </div>
    </div>
  );
};

export default Navbar;
