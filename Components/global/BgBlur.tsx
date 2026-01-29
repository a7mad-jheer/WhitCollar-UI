
import Image from "next/image";
import React from "react";
import { HeroTitle } from "@/Components/global/page";

export const BgBlur = ({
  imgSrc,
  textTitle,
  contentText,
  description,
  className,
  children,
}: {
  imgSrc: string;
  textTitle: string;
  contentText?: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="relative h-150 ">
      <div className="relative w-full h-full p-5">
        <Image fill alt="" src={imgSrc} className="object-cover" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center xl:items-start  bg-gray-950/80 md:backdrop-blur-md backdrop-blur-xs xl:w-2/5  text-white ">
        <div className="flex flex-col   ">
          <div className="sm:w-130 h-100 flex flex-col items-center justify-center">
            <div
              className={`p-5 flex flex-col items-center ${
                className || ""
              }`}
            >
              <HeroTitle title={textTitle} />

              {contentText && (
                <div className="text-4xl font-bold mb-4 md:leading-tight">
                  <h1 className=" text-center">{contentText}</h1>
                </div>
              )}

              {description && (
                <p className="text-gray-400 md:text-xl mb-5 text-center">
                  {description}
                </p>
              )}
            </div>

            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgBlur;
