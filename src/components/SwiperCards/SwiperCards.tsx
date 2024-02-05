"use client";
import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SwiperCards = () => {
  const SwiperItems = [
    {
      image: "/assets/pdf-word.svg",
      title: "PDF to Word",
      description: "Easily convert PDF to word document.",
    },
    {
      image: "/assets/PDF-PPT.svg",
      title: "PDF to PPT",
      description: "Convert PDF to Powerpoint online",
    },
    {
      image: "/assets/pdf-excel.svg",
      title: "PDF to Excel",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/PDF-JPG.svg",
      title: "PDF to JPG",
      description: "Convert PDF files to a set of optimized JPG, PNG,BMP,G",
    },
    {
      image: "/assets/PDF-TXT.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/PDF-RTX.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/PDF-Pages.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/pdf-html.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/PDF-DXF.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/PDF-EPUB.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/OCR.svg",
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
  ];
  const customNavigation = {
    prevEl: ".custom-prev-button",
    nextEl: ".custom-next-button",
  };

  return (
    <div className=" mx-auto px-5  sm:px-4 lg:px-6 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black  dark:text-white lg:text-[30px] md:text-[30px]  sm:text-[30px] text-[16px] font-[700] py-2">
        Convert from PDF
      </h1>
      <div className="relative">
        <Swiper 
          spaceBetween={20}
          navigation={customNavigation}
          modules={[Navigation]}
          className="mySwiper  "
          breakpoints={{
            1200:{
              slidesPerView:5,
            },
            1025:{
              slidesPerView:3,
            },
            768:{
              slidesPerView:2,
            },
           
           
          }}
        >
          {SwiperItems.map((item, index) => (
            <SwiperSlide key={index} className="py-4">
              <Card key={index} className=" w-full hover:shadow-xl relative group">
                <Image src={item.image} alt="" width={0} height={0} className="w-16 h-16"  />
                <h2 className="font-[700] text-black  dark:text-white lg-text-[20px] md:text-[20px] sm:text-[14px] text-[14px] mt-5 mb-3">
                  {item.title}
                </h2>
                <p className="my-2   lg-text-[14px] md:text-[14px] sm:text-[12px] text-[12px] text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
                  {item.description}
                </p>
                {/* book mark Image */}
                <Image src="/assets/book-mark.svg" alt="" width={0} height={0} className="w-6 h-6 absolute right-3 top-3 hidden group-hover:block"/>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div className="custom-prev-button absolute top-[90px] left-[-15px] sm:left-[-10px] lg-left-[-25px] xl:left-[-25px] z-10">
          <Image src="/assets/arrow-left.svg" alt="" width={0} height={0} className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 " />
        </div>
        <div className="custom-next-button absolute top-[90px] right-[-15px] sm:right-[-10px] lg-right-[-25px] xl:right-[-25px] z-10">
          <Image src="/assets/arrow-right.svg" alt="" width={0} height={0} className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </div>
      </div>
    </div>
  );
};

export default SwiperCards;
