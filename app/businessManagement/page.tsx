"use client";

import {
  BgBlur,
  Button,
  HeroTitle,
  ScrollOverlay,
} from "@/Components/global/GlobalWrapper";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileZipper } from "react-icons/fa6";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const servicesItems = [
  {
    id: 0,
    title: "Financial Consultancy",
    icon: <IoIosArrowForward size={30} />,
  },
  {
    id: 1,
    title: "Business Management",
    icon: <IoIosArrowForward size={30} />,
  },
  {
    id: 2,
    title: "Consultancy Program",
    icon: <IoIosArrowForward size={30} />,
  },
  {
    id: 3,
    title: "Marketing Consultancy",
    icon: <IoIosArrowForward size={30} />,
  },
  {
    id: 4,
    title: "Financial Insurance & Job",
    icon: <IoIosArrowForward size={30} />,
  },
  { id: 5, title: "Bank Management", icon: <IoIosArrowForward size={30} /> },
];

const benfitsItems = [
  { id: 0, icon: <MdOutlineDone />, label: "Credibly reintermediate backend." },
  { id: 1, icon: <MdOutlineDone />, label: "Holistically foster superior." },
  { id: 2, icon: <MdOutlineDone />, label: "Distinctively exploit optimal." },
];

const questionsItems = [
  { id: 0, title: "How does our pricing works ?", icon: <IoMdAdd /> },
  {
    id: 1,
    title: "Where do I look for 'Frequently Asked' Questions ?",
    icon: <IoMdAdd />,
  },
  {
    id: 2,
    title: "Which template is the best for business ?",
    icon: <IoMdAdd />,
  },
  {
    id: 3,
    title: "Which template is the best for business ?",
    icon: <IoMdAdd />,
  },
];

export const BusinessManagement = () => {
  const [onMouseService, setOnMouseService] = useState<number | null>(null);

  return (
    <section>
      {/* First Component */}
      <div className="h-96 overflow-hidden">
        <BgBlur
          className="text-center xl:text-start"
          imgSrc="/meeting.jpg"
          textTitle="About The Service"
          contentText="Business Management"
        />
      </div>

      {/* Second Component */}
      <div className="xl:flex gap-10 xl:px-20">
        {/* left Component */}
        <div className="p-5 flex flex-col gap-5 justify-right xl:w-[40%]">
          {/* Card One */}
          <div className="bg-gray-300  p-5">
            <h1 className="font-bold text-xl py-2 text-center">Services</h1>
            <ul className="flex flex-col gap-2">
              {servicesItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`flex justify-between items-center p-5 group  ${
                      onMouseService === item.id
                        ? "bg-red-300 text-white"
                        : "bg-gray-200"
                    }`}
                    onMouseEnter={() => setOnMouseService(item.id)}
                    onMouseLeave={() => setOnMouseService(null)}
                  >
                    <Link href="" className="font-semibold">
                      {item.title}
                    </Link>
                    <span className="cursor-pointer transform duration-200 group-hover:translate-x-2">
                      {item.icon}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Card Two */}
          <div className="bg-gray-300 text-center  p-5 md:text-start">
            <h1 className="font-bold text-xl py-2">Download</h1>
            <hr className="py-2" />
            <p className="text-gray-700 ">
              One-to-one customer service with robust deliverables
            </p>
            <div className="flex flex-col items-center gap-2 mt-3 md:flex-row md:justify-start justify-center">
              <Button
                text="Document.pdf"
                href=""
                icon={<FaFilePdf size={25} />}
              />
              <Button
                text="Document.zip"
                href=""
                icon={<FaFileZipper size={25} />}
              />
            </div>
          </div>

          {/* Card Three */}
          <div className="relative  z-10 w-full h-96 p-5">
            <div className="absolute inset-0 z-0">
              <Image alt="#" src="/meeting.jpg" fill className="object-cover" />
            </div>

            <ScrollOverlay
              PrimaryBg="bg-red-300/20"
              secondaryBg="bg-red-400/60"
              sectionHight={384}
            >
              <div className="relative z-30 flex flex-col justify-center h-full text-white gap-5 items-center p-5">
                <HeroTitle
                  title="Have Any Question ?"
                  description={
                    <>
                      Do You Need <span className="text-white">Any Help?</span>
                    </>
                  }
                  paragraph={
                    <p className="text-white">
                      leverage aglie frameworks to provide a robust synopsis for
                      high level overviews. thinking to further the overall
                      proppsition.
                    </p>
                  }
                />
                <Button text="Contact Us" href="#" />
              </div>
            </ScrollOverlay>
          </div>
        </div>

        {/* Right Component */}
        <div className="p-5 xl:w-1/2">
          <div className=" relative w-ful h-90">
            <Image src="/meeting.jpg" fill alt="#" className="object-cover" />
          </div>

          <div className="my-3">
            <h1 className="font-bold">
              Why Us For International Business Management Consulting!
            </h1>
            <p className="text-gray-500 ">
              Completly synergized resourced taxings relationship premiers
              markets ultivate one-to-one cusomer service with robust ideas
              dynamically innovated resources leveling customer service for
              state of the art customer service innovate product for reliable
              supply engage web services cutting-edge deliverables
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-red-400 font-bold">
              Proactively envisioned multimedia based expertise media growth
              superior collaboration.
            </h1>
            <p className="text-gray-500">
              One-to-one customer service with robust ideas dynamically
              innovated resources for reliable supply engage web services
              cutting-edge deliverables.
            </p>
          </div>

          <div>
            <div className="my-3">
              <h1 className="font-bold text-xl">Our benefits</h1>
              <p className="text-red-400 font-bold">
                Incubate standards compliant channels benefits.
              </p>
              <div className="xl:flex xl:items-center gap-5">
                <div className="relative w-ful h-90 xl:w-1/2 xl:h-44 ">
                  <Image
                    src="/meeting.jpg"
                    fill
                    alt="#"
                    className="object-cover"
                  />
                </div>

                <ul className="flex flex-col gap-2 my-3">
                  {benfitsItems.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 border-2 border-gray-400 p-3 rounded-xl shadow-lg"
                      >
                        <span className="w-6 h-6 bg-red-300 flex items-center justify-center rounded-full text-white">
                          {item.icon}
                        </span>
                        <p>{item.label}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" font-bold text-xl">Frequently Asked Questions</h1>
            <p className="text-gray-500 ">
              Leveling Customer Service For State Of The Art Customer Serviec
              Innovate Product For Reliable Supply Engage Web Services
              Cutting-Edge Deliverables.
            </p>

            <ul className="flex flex-col gap-2 my-3">
              {questionsItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-2 border-2 border-gray-400 py-4 px-2 rounded-xl shadow-lg"
                  >
                    <h1>{item.title}</h1>
                    <span className="w-6 h-6 bg-red-300 flex items-center justify-center rounded-full text-white">
                      {item.icon}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessManagement;
