import React from "react";
import Image from "next/image";
import Card from "../Card/Card";

const BookCards = () => {
  const cardItems = [
    {
      image: "/assets/editPDF.svg",
      title: "Edit PDF",
      description: "Use the best online tool to edit PDFs in your browser",
    },
    {
      image: "/assets/Crop-PDF.svg",
      title: "Crop PDF",
      description: "Crop PDF online to be selected area, adjust margin size",
    },
    {
      image: "/assets/replace-text-pdf.svg",
      title: "Replace Text",
      description: "The easiest way to repalce text online",
    },
    {
      image: "/assets/Rotate-PDF.svg",
      title: "Rotate PDF",
      description: "Rotate and save your PDF pages online for file",
    },
  ];

  return (
    <div className="mx-auto px-5  sm:px-4 lg:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black  dark:text-white lg:text-[30px] md:text-[30px]  sm:text-[30px] text-[16px] font-[700] py-6">Your Bookmarks</h1>
      {/* Card Section */}
      <div className="flex gap-5 flex-wrap">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/4 hover:shadow-xl lg:max-w-[258px] md:max-w-[350px]  w-full"
          >
            <Image src={item.image} alt="" width={0} height={0} className="w-16 h-16 " />
            <h2 className="font-[700] lg-text-[20px] md:text-[20px] sm:text-[14px] text-[14px] text-black  dark:text-white  mt-5 mb-3">{item.title}</h2>
            <p className="my-2  lg-text-[14px] md:text-[14px] sm:text-[12px] text-[12px] text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
