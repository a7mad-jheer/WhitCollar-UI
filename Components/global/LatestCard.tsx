import Image from "next/image";
import React from "react";

export const LatestCard = ({imageSrc , title , dateIcon ,date , icon} : {imageSrc:string , title : string , dateIcon : React.ReactElement ,date:string , icon : React.ReactElement}) => {
  return (
    <div className="border-gray-200 border-2 shadow-xl">
      <div className="relative w-full md:w-90 xl:w-100 h-100">
        <Image alt="" src={imageSrc} fill className="object-cover" />
      </div>

      <div className="flex items-center justify-between mt-5 p-3">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{title}</h1>
          <div className="flex gap-1 ">
            <span className="text-red-300">{dateIcon}</span>
            <span className="text-sm text-gray-300">{date}</span>
          </div>
        </div>

        <span className="bg-red-300 h-10 w-10 rounded-full flex justify-center items-center text-white">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default LatestCard;
