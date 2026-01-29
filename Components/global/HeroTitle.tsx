import React from "react";
import { GoDotFill } from "react-icons/go";

export const  HeroTitle =  ({ title , description , paragraph , className , titleSize}: { title: string , description?:React.ReactNode , paragraph ?: React.ReactNode , className?:string , titleSize?: string}) => {
  
  return (
    <section className={`flex flex-col justify-center items-center m-10  xl:justify-start  ${className || ""}`}>

        {/* Header Title */}
      <div className="flex items-center justify-center  gap-1 w-fit">
        <span className="text-red-300">
          <GoDotFill />
        </span>
        <span className={`text-sm font-semibold text-center  ${titleSize}` } >{title}</span>
        <span className="text-red-300">
          <GoDotFill />
          </span>
      </div>
      {/*End Header Title */}


      {/* Description */}
        <div className={`w-full flex justify-center text-center`}>
          <div className="font-bold  lg:text-4xl text-2xl lg:max-w-xl w-fit text-center xl:text-start">{description}</div>
          </div>
        {/*End Description */}


        {/* Paragraph */}
          <div className=" text-gray-800 text-center mt-2">
          {paragraph}
        </div>
        {/*End Paragraph */}

    </section>
  );
}

export default HeroTitle;