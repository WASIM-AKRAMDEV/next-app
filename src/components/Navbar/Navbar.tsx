import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "#", label: "Stock Video" },
    { href: "#", label: "Video Templates" },
    { href: "#", label: "Music" },
    { href: "#", label: "Sound Effects" },
    { href: "#", label: "Graphic Templates" },
    { href: "#", label: "Graphic" },
    { href: "#", label: "Presentation Templates" },
    { href: "#", label: "Photos" },
    { href: "#", label: "Fonts" },
    { href: "#", label: "Add-ons" },
    { href: "#", label: "More" },
  ];
  return (
    <nav className="py-3 shadow-md ">
      <div className=" mx-auto px-1 sm:px-4 lg:max-w-[1550px] ">
        <div className="flex justify-between">
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
          <div className=" bg-[#f2f2f2] max-w-[500px] w-full py-[15px] rounded-[30px] px-5  flex justify-between">
            <input
              type="text"
              className="bg-transparent w-[100%] focus:outline-none "
              placeholder="Search for Movies,TV Shows, Themes & Casts"
            />
            <Image src="/assets/search.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex">
            <button className="text-[#4c4a53] px-6 p-[15px] font-[600]">
              Log in
            </button>
            <button className=" bg-[#3567e1] rounded-[30px] px-6 py-[14px] ">
              Sign up
            </button>
          </div>
        </div>
        <div className="text-[#4c4a53] flex pt-[40px] pb-[10px] lg:overflow-x-auto lg:block md:hidden">
          <ul className="flex gap-5">
            {navItems.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="font-[600] text-[18px] lg:text-[18px] md:text-[14px] lg:truncate"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
