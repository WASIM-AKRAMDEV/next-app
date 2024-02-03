import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f1f4f5] mt-40">
      <div className="mx-auto px-1 sm:px-4 lg:max-w-[1530px] py-[40px]">
        <div className="flex items-center gap-7">
          <Link href="#" className="text-black text-20px font-[700]">
            Follow Us
          </Link>
          <Link href="#">
            <Image
              src="/assets/youtube.svg"
              width={20}
              height={20}
              alt=""
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/twitter.svg"
              width={20}
              height={20}
              alt=""
            ></Image>
          </Link>
          <Link href="#">
            <Image
              src="/assets/facebook.svg"
              width={20}
              height={20}
              alt=""
            ></Image>
          </Link>
        </div>
        <div className="my-8 border-y border-[#e5e7e9] py-8 flex  ">
          <div className=" text-black max-w-[290px] w-full">
            <h6 className="font-[600] mb-8">Internal Links</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Documentaries</Link>
              </li>
              <li>
                <Link href="#">Themes</Link>
              </li>
              <li>
                <Link href="#">Chrome casts</Link>
              </li>
            </ul>
          </div>
          <div className=" text-black max-w-[290px] w-full">
            <h6 className="font-[600] mb-8">Enterprise</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Download Chrome Browser</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser for Enterprise</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser Devices</Link>
              </li>
              <li>
                <Link href="#">ChromeOS</Link>
              </li>
              <li>
                <Link href="#"> Google Cloud </Link>
              </li>
              <li>
                <Link href="#"> Google Workspace </Link>
              </li>
            </ul>
          </div>
          <div className=" text-black max-w-[290px] w-full">
         <h6 className="font-[600] mb-8">Internal Links</h6>
         <ul className="text-[#1d2938] flex flex-col gap-5">
          <li>
            <Link href="#">Documentaries</Link>
          </li>
          <li>
            <Link href="#">Themes</Link>
          </li>
          <li>
            <Link href="#">Chrome casts</Link>
          </li>
         </ul>
         </div>
          <div className=" text-black max-w-[290px] w-full">
            <h6 className="font-[600] mb-8">Enterprise</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Download Chrome Browser</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser for Enterprise</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser Devices</Link>
              </li>
              <li>
                <Link href="#">ChromeOS</Link>
              </li>
              <li>
                <Link href="#"> Google Cloud </Link>
              </li>
              <li>
                <Link href="#"> Google Workspace </Link>
              </li>
            </ul>
          </div>
          <div className=" text-black max-w-[290px] w-full">
            <h6 className="font-[600] mb-8">Internal Links</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Documentaries</Link>
              </li>
              <li>
                <Link href="#">Themes</Link>
              </li>
              <li>
                <Link href="#">Chrome casts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex items-center">
          <h1 className="text-[#1d2938] font-[700] text-[28px]">Similar<span className="text-[#f1f4f5] text-[22px] rounded-xl bg-[#1d2938] p-2 ms-1">Watch</span></h1>
          <ul className="flex gap-5 ms-6 text-[#1d2938]">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Trems and conditions</Link>
            </li>
            <li>
              <Link href="#">Cookies Policy</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">EULA</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          </div>

          <a href='#' className="w-[45px] h-[45px] bg-[#dedede] rounded-full flex justify-center items-center">
          <Image src="/assets/moon.svg" alt="" width={20} height={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
