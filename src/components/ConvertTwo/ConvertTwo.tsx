import React from "react";
import Image from "next/image";
import Card from "../Card/Card";

const ConvertTwo = () => {
  const convertItems = [
    {
      image: "/assets/word-pdf.svg",
      title: "Word to PDF",
      description: "Easily convert PDF to word document.",
    },
    {
      image: "/assets/PPT-PDF.svg",
      title: "PPT to PDF",
      description: "Convert PDF to Powerpoint online",
    },
    {
      image: "/assets/Excel-PDF.svg",
      title: "Excel to PDF",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: "/assets/jpg-pdf.svg",
      title: "Excel to PDF",
      description: "Easily convert PDF to word document.",
    },
    {
      image: "/assets/Image-in-TXT.svg",
      title: "JPG to PDF",
      description: "Convert PDF files to a set of optimized JPG, PNG,BMP,G",
    },

  ];
  return (
    <div className="mx-auto px-1 sm:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black text-[35px] font-[700] py-6">
        Covert to PDF
      </h1>
      <div>
       <div className="flex space-x-[20px]">
       {convertItems.map((item, index) => (
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
    </div>
  );
};

export default ConvertTwo;
