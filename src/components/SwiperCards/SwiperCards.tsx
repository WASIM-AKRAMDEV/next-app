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
    <div className=" mx-auto px-1 sm:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black text-[35px] font-[700] py-2">
        Convert from PDF
      </h1>
      <div className="relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={customNavigation}
          modules={[Navigation]}
          className="mySwiper "
        >
          {SwiperItems.map((item, index) => (
            <SwiperSlide key={index} className="py-4">
              <Card key={index} className="max-w-[260px] w-full hover:shadow-xl">
                <Image src={item.image} alt="" width={70} height={70} />
                <h2 className="font-[700] text-[22px] mt-5 mb-3">
                  {item.title}
                </h2>
                <p className="my-2 text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
                  {item.description}
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div className="custom-prev-button absolute top-[90px] left-[-25px] z-10">
          <Image src="/assets/rightArrow.svg" alt="" width={45} height={45} />
        </div>
        <div className="custom-next-button absolute top-[90px] right-[-25px] z-10">
          <Image src="/assets/leftArrow.svg" alt="" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default SwiperCards;
