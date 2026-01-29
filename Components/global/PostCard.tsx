import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PostCard = ({ imgSrc , month , date , middleIcon , middleText , lastIcon , lastText , title , description , link} : {imgSrc:string , month:string , date:string , middleIcon:React.ReactElement , middleText:string , lastIcon:React.ReactElement , lastText:string , title:string , description:string , link:string}) => {
    return (
        <div  className=" w-full md:w-120 sm:h-125 h-160">
                  <div className="relative w-full  h-90">
                    <Image src={imgSrc} alt="#" fill className="object-cover" />
        
                    <div className="absolute bottom-0 left-0 w-full grid grid-cols-6  text-white text-xs ">
                      <span className="col-span-2 p-2 bg-red-300 px-3 py-2  text-center flex items-center justify-center">
                        {month} {date} 
                      </span>
                      <span className="col-span-2 p-2 bg-gray-700 flex flex-col  gap-1 items-center justify-center text-center border-r-2 border-l-2">
                        {middleIcon}
                        {middleText}
                      </span>
                      <span className="col-span-2 bg-gray-700 flex flex-col  gap-1 items-center justify-center">
                         {lastIcon}
                        {lastText}
                      </span>
                    </div>
                  </div>
        
                  <div className="mt-5 ">
                    <h1 className="font-semibold mb-2 ">
                      {title}
                    </h1>
                    <p className="text-gray-500 ">
                      {description}
                    </p>
                    <Link href="#" className="underline text-blue-700 mt-5 mb-2">
                      {link}
                    </Link>
                  </div>
                </div>
    )
}

export default PostCard;