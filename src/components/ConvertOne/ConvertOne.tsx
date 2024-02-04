
import React from "react";
import Image from "next/image";
import Card from "../Card/Card";


const ConvertOne = () => {
  const convertItems = [
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
  ];
  return (
    <div className="mx-auto px-5  sm:px-4 lg:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black lg:text-[30px] md:text-[30px]  sm:text-[30px] text-[16px] font-[700] py-6">
        Covert from PDF
      </h1>
            {/* Card Section */}
       <div className="flex gap-4 flex-wrap">
       {convertItems.map((item, index) => (
          <Card key={index} className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/4 hover:shadow-xl lg:max-w-[258px] md:max-w-[350px]  w-full">
            <Image src={item.image} alt=""width={0} height={0} className="w-16 h-16" />
            <h2 className="font-[700] lg-text-[20px] md:text-[20px] sm:text-[14px] text-[14px] mt-5 mb-3">{item.title}</h2>
            <p className="my-2 lg-text-[14px] md:text-[14px] sm:text-[12px] text-[12px] text-[#8a8a8a] overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2 hover:line-clamp-none">
              {item.description}
            </p>
          </Card>
        ))}
       </div>
    </div>
  );
};

export default ConvertOne;
