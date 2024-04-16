import React from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] flex h-[10vh] w-full justify-between bg-white">
      <div className="flex items-center pl-4">
        <img className="h-fit w-[30px]" src={logo} alt="logo" />
        <p className="pb-1 pl-4 text-2xl text-violet">JournAI</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            className="flex pr-10 h-10 w-full items-center justify-center gap-x-32 rounded-lg bg-violet px-4 focus:border-purple-plum focus:bg-lilac-petals focus:text-purple-plum focus:outline-none "
            placeholder="Search entry..."
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2" color="#ffffff" />
        </div>
        <User className="mx-4 h-10 w-auto" color="#D0D1FF" />
      </div>
    </div>
  );
};

export default Navbar;
