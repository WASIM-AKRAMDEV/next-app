"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Stock Video" },
    { href: "/", label: "Video Templates" },
    { href: "/", label: "Music" },
    { href: "/", label: "Sound Effects" },
    { href: "/", label: "Graphic Templates" },
    { href: "/", label: "Graphic" },
    { href: "/", label: "Presentation Templates" },
    { href: "/", label: "Photos" },
    { href: "/", label: "Fonts" },
    { href: "/", label: "Add-ons" },
    { href: "/", label: "More" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const [isResponseOpen, setIsResponseOpen] = useState(false);
  const toggle = () => setIsResponseOpen(!isResponseOpen);

  const handleCancelClick = () => {
    setIsResponseOpen(false);
  };
  return (
    <nav className="py-3 shadow-md bg-white">
      <div className=" mx-auto px-1 sm:px-4 lg:max-w-[1550px] ">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {/* List Icon */}
            <Image
              src="/assets/bar.svg"
              width={0}
              height={0}
              alt=""
              className="w-8 h-8 lg:hidden flex"
              onClick={handleClick}
            />
            {/* Logo image */}
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="My Image"
                width={45}
                height={45}
              />
              <Link
                href=""
                className="text-black text-[22px] font-[800] ms-1 tracking-[-1.5px]"
              >
                Zin Tools
              </Link>
            </div>
          </div>
          {/*Search Input */}
          <div className=" bg-[#f2f2f2] max-w-[500px] w-full py-[15px] rounded-[30px] px-5   justify-between lg:flex hidden">
            <input
              type="text"
              className="bg-transparent w-[100%] focus:outline-none text-black"
              placeholder="Search for Movies,TV Shows, Themes & Casts"
            />
            <Image src="/assets/search.svg" alt="" width={24} height={24} />
          </div>
          {/* Small screen  search icons */}
          <Image
            src="/assets/search.svg"
            alt=""
            width={0}
            height={0}
            className="w-5 h-5 lg:hidden block"
            onClick={toggle}
          />
          {/* Sign in btns */}
          <div className="lg:flex hidden">
            <button className="text-[#4c4a53] px-6 p-[15px] font-[600] ">
              Log in
            </button>
            <button className=" bg-[#3567e1] rounded-[30px] px-6 py-[14px] ">
              Sign up
            </button>
          </div>
        </div>
        {/* Nav links */}
        <div
          className={`text-[#4c4a53] pt-[40px] pb-[10px] lg:overflow-x-auto lg:flex lg:relative lg:shadow-none md:absolute left-0 md:shadow-xl bg-white md:w-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex lg:flex-row  md:flex-col lg:justify-start md:justify-center sm:justify-center justify-center  md:items-center  items-center  flex-col gap-5">
            {navItems.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="font-[600] text-[14px] lg:text-[18px] md:text-[14px] lg:truncate"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex flex-col">
            <button className="text-[#4c4a53] px-6 p-[15px] font-[600] ">
              Log in
            </button>
            <button className=" bg-[#3567e1] rounded-[30px] px-6 py-[14px] text-white ">
              Sign up
            </button>
          </div>
        </div>
        {/* search tab */}
        <div
          className={`fixed left-0 top-0 w-full h-[100vh] z-20 overflow-hidden bg-white p-3 ${
            isResponseOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between gap-4 items-center">
            <input
              type="text"
              className="bg-transparent  rounded-lg w-full focus:outline-none border-[2px] border-[#3567e1] py-3  ps-2 text-black "
              placeholder="Search "
            />
            {/* cancel button */}
            <button className="text-[#4c4a53]" onClick={handleCancelClick}>
              cancel
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
