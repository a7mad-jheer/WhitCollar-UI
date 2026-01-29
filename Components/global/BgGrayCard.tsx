import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BgGrayCard = ({srcImage , title , description , linkText , linkHref , children}:{srcImage : string , title : string , description: string , linkText:string , linkHref: string , children : React.ReactNode}) => {
    return (
        <div className="w-full  flex flex-col sm:justify-center  xl:flex-row">
        <div className="bg-gray-200/80  flex flex-col xl:items-end items-center  xl:w-2/5 xl:py-30 py-20  xl:pr-15 w-full ">
        <div className="w-2/3 flex flex-col sm:items-center border-2 border-gray-400 overflow-hidden rounded-xl">
          <div className="relative  w-full  h-80">
            <Image fill src={srcImage} alt="#" className="object-cover" />
          </div>

          <div className = "w-full p-2">
            <h1 className="font-bold my-3 md:text-2xl text-gray-900 ">
            {title}
          </h1>
          <p className="text-gray-500 mb-3 ">
            {description}
          </p>
          <Link href={linkHref} className="underline text-blue-700">
            {linkText}
          </Link>
          </div>
        </div>
      </div>

      <div  className="flex-1 flex flex-col items-center justify-center xl:justify-start  xl:items-start md:p-30  py-20 px-10">
        {children}
      </div>

      </div>
    )
}

export default BgGrayCard;