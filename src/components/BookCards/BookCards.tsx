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
    <div className="mx-auto px-1 sm:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black text-[35px] font-[700] py-6">Your Bookmarks</h1>
      <div className="flex space-x-[20px]">
        {cardItems.map((item, index) => (
          <Card key={index} className="max-w-[258px] w-full hover:shadow-xl">
            <Image src={item.image} alt="" width={70} height={70} />
            <h2 className="font-[700] text-[22px] mt-5 mb-3">{item.title}</h2>
            <p className="my-2 text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
