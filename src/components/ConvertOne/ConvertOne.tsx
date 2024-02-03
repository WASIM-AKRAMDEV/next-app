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
    <div className="mx-auto px-1 sm:px-4 lg:max-w-[1400px] py-[40px]">
      <h1 className="text-black text-[35px] font-[700] py-6">
        Covert from PDF
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

export default ConvertOne;
