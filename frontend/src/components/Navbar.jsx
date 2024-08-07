import { Search } from "lucide-react";
import { User } from "lucide-react";
import logo from "../assets/logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home } from "lucide-react";
import { BookText } from "lucide-react";
import { Star } from "lucide-react";
import { SquareUser } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  function Create() {
    navigate("/create");
  }
  
  return (
    <div className="fixed top-0 z-[50] flex h-[10vh] w-full justify-between bg-white">
      <div className="flex items-center pl-4">
        <Sheet>
          <SheetTrigger asChild>
            <img className="h-fit w-[30px]" src={logo} alt="logo" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[23vw]">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center pl-4">
                  <img className="h-fit w-[30px]" src={logo} alt="logo" />
                  <p className="pb-1 pl-4 text-2xl text-violet">JournAI</p>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="items-left mt-4 flex flex-col justify-around gap-3">
                  <a href="/home">
                    <div
                      onClick={Home}
                      className="ml-3 flex h-10 w-[85%] cursor-pointer items-center justify-start rounded-lg bg-white text-left font-medium text-[#53545C] hover:border-purple-plum hover:bg-purple-plum hover:text-white"
                    >
                      <Home className="ml-2" />
                      <p className="p-2 pt-1.5 text-[18px]">Home</p>
                    </div>
                  </a>
                  <a href="/all/entries">
                    <div className="ml-3 flex h-10 w-[80%] cursor-pointer items-center justify-start rounded-lg bg-white text-left font-medium text-[#53545C] hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                      <BookText className="ml-2" />
                      <p className="p-2 pt-1.5 text-[18px]">All Entries</p>{" "}
                    </div>
                  </a>
                  <a href="/starred/entries">
                    <div className="ml-3 flex h-10 w-[80%] cursor-pointer items-center justify-start rounded-lg bg-white text-left font-medium text-[#53545C] hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                      <Star className="ml-2" />

                      <p className="p-2 pt-1.5 text-[18px]">Starred Entries</p>
                    </div>
                  </a>
                  <div className="ml-3 flex h-10 w-[80%] cursor-pointer items-center justify-start rounded-lg bg-white text-left font-medium text-[#53545C] hover:border-purple-plum hover:bg-purple-plum hover:text-white">
                    <SquareUser className="ml-2" />
                    <p className="p-2 pt-1.5 text-[18px]">Profile</p>
                  </div>
                  <div className="mt-56 flex flex-col items-center justify-center gap-y-3 ">
                    <div
                      onClick={Create}
                      className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-water text-center text-white hover:bg-turquoise"
                    >
                      <p className="text-md h-auto w-full">Create Entry</p>
                    </div>
                    <a href="/login">
                      <div className="flex min-h-10 w-[20vw] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-none bg-alert text-center text-white hover:bg-[#FF6464] ">
                        <p className="text-md h-auto w-full">Logout</p>
                      </div>
                    </a>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <p className="pb-1 pl-4 text-2xl text-violet">JournAI</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative ">
          <input
            type="text"
            className="flex h-10 w-full items-center justify-center gap-x-32 rounded-lg bg-lilac-petals px-4 pr-32 placeholder:text-violet  focus:bg-white focus:text-purple-plum  focus:outline-violet "
            placeholder="Search entry.."
          />
          <Search
            className="absolute right-2 top-1/2 -translate-y-1/2"
            color="#A1A3F6"
          />
        </div>
        <User className="mx-4 h-8 w-auto" color="#6648DB" />
      </div>
    </div>
  );
};

export default Navbar;
