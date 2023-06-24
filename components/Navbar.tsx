import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import { Kablammo } from "@next/font/google";
import { PiSquaresFourDuotone, PiCirclesFourDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BiHeart, BiUserCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";

const openSans = Kablammo({ subsets: ["latin"] });

const Navbar = () => {
  return (
    // outer main div
    <div className="w-full bg-[#7B3878] text-white">
      <div className="w-full h-full border-b-[1px] border-b-white">
        {/* main div */}
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
          {/* logo */}
          <div className="navBarHover">
            <p className="flex items-center" style={openSans.style}>
              ShopGenie
            </p>
            <Image src={logo} alt="logo" className="w-7 h-7 inline" />
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <PiSquaresFourDuotone className="w-6 h-6" />
            </div>
            <p className="text-base font-semibold">Department</p>
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <PiCirclesFourDuotone className="w-6 h-6" />
            </div>
            <p className="text-base font-semibold">Services</p>
          </div>

          <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search your wish here!"
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow-500 text-black text-xl">
              <CiSearch />
            </span>
          </div>

          <div className="navBarHover">
            <BiHeart className="text-xl" />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>

          <div className="navBarHover">
            <BiUserCircle className="text-xl" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Accout</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-[#59284B] duration-300 ease-out relative">
            <BsCart3 className="text-lg" />
            <p className="text-sm -mt-2">$0.00</p>
            <span className="absolute w-4 h-4 bg-yellow-500 text-black -top-2 right-5 rounded-full flex items-center justify-center font-bodyFont text-xs">
              0
            </span>
          </div>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
