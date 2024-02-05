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
    <div className="mx-auto px-5  sm:px-4 lg:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black  dark:text-white lg:text-[30px] md:text-[30px]  sm:text-[30px] text-[16px] font-[700] py-6">Covert to PDF</h1>
            {/* Card Section */}
       <div className="flex gap-4 flex-wrap">
       {convertItems.map((item, index) => (
          <Card key={index} className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/4 hover:shadow-xl lg:max-w-[258px] md:max-w-[350px]  w-full">
            <Image src={item.image} alt="" width={0} height={0} className="w-16 h-16" />
            <h2 className="font-[700] text-black  dark:text-white lg-text-[20px] md:text-[20px] sm:text-[14px] text-[14px] mt-5 mb-3">{item.title}</h2>
            <p className="my-2 lg-text-[14px] md:text-[14px] sm:text-[12px] text-[12px] text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
              {item.description}
            </p>
          </Card>
        ))}
       </div>

    </div>
  );
};

export default ConvertTwo;
