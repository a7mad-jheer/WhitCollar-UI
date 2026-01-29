"use client";

import Header from "@/layout/Header";

import { useState } from "react";
import { IoLogoAngular } from "react-icons/io";
import { PiListBold } from "react-icons/pi";
import Links from "./Links";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
  const [openList, setOpenList] = useState<boolean>(false);

  return (
    <div className="">
      <Header />

      <div className="flex justify-between lg:justify-around items-center py-8 bg-red-200 px-5 md:px-20">
        <div className="flex items-center gap-2">
          <IoLogoAngular size={50} />
          <h1 className="font-semibold text-2xl">WhiteCollar</h1>
        </div>

        <Links className="lg:flex lg:gap-5 hidden text-[16px] flex-1" />

        <PiListBold
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={() => setOpenList(true)}
        />

        {openList && (
          <div
            className={`absolute right-0 top-0 w-72 min-h-full ${
              openList ? "translate-x-0" : "translate-x-full"
            } bg-amber-50 transform duration-400 z-40`}
          >
            <div className="p-2 w-fit">
              <IoMdClose
                onClick={() => setOpenList(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>
            <Links
              liStyle="w-full px-5"
              className="flex flex-col items-center gap-5"
            />
          </div>
        )}
      </div>
    </div>
  );
}
