import Link from "next/link";
import {
  BgBlur,
  Button,
  Circle,
  ClientCard,
  HeroTitle,
} from "../../Components/global/GlobalWrapper";
import { FaHandshake } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { FaLightbulb, FaDraftingCompass, FaStar } from "react-icons/fa";
import { MdDesignServices, MdAnalytics, MdDone } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import React from "react";

const ourItems = [
  {
    id: 0,
    title: " Financial Consultancy",
    icon: <FaHandshake size={35} />,
    linkText: "Read More",
  },
  {
    id: 1,
    title: " Business Mangement",
    icon: <FaBriefcase size={35} />,
    linkText: "Read More",
  },
  {
    id: 2,
    title: " Consultants & program",
    icon: <FaRegLightbulb size={35} />,
    linkText: "Read More",
  },
  {
    id: 3,
    title: " Compony Management",
    icon: <FaBuilding size={35} />,
    linkText: "Read More",
  },
  {
    id: 4,
    title: " Financial & insurance jobs",
    icon: <FaMoneyBillWave size={35} />,
    linkText: "Read More",
  },
  {
    id: 5,
    title: " Bonking Management",
    icon: <FaUniversity size={35} />,
    linkText: "Read More",
  },
];

const offerItems = [
  {
    id: 0,
    icon: <FaLightbulb size={40} />,
    title: "Product Development",
    description: "Level Overview Proposition",
  },
  {
    id: 1,
    icon: <FaDraftingCompass size={40} />,
    title: "UI/UX Designing",
    description: "Level Overview Proposition",
  },
  {
    id: 2,
    icon: <MdDesignServices size={40} />,
    title: "Data Analysis",
    description: "Level Overview Proposition",
  },
  {
    id: 3,
    icon: <MdAnalytics size={40} />,
    title: "Content Management",
    description: "Level Overview Proposition",
  },
];

const chooseItems = [
  {
    id: 0,
    icon: <MdDone />,
    num: "2,800+",
    spanText: "Active Clients",
    description: "Provide a robust synopsis for high level overviews.",
  },
  {
    id: 1,
    icon: <MdDone />,
    num: "106+",
    spanText: "Team Member",
    description: "Provide a robust synopsis for high level overviews.",
  },
  {
    id: 2,
    icon: <MdDone />,
    num: "2,800+",
    spanText: "Team Member",
    description: "Provide a robust synopsis for high level overviews.",
  },
  {
    id: 3,
    icon: <MdDone />,
    num: "1,670+",
    star: (
      <>
        5 <FaStar className="text-red-300" /> stars
      </>
    ),
    spanText: " reviews.",
    description: "Provide a robust synopsis for high level overviews.",
  },
];

const circleItems = [
  {
    id: 1,
    value: 95,
    title: "Clients",
    description: "Quick Resposive",
    paragraph: "Objectively Products Whereas Parallel Platforms Procedures",
  },
  {
    id: 2,
    value: 85,
    title: "Project",
    description: "Finished Jobs",
    paragraph: "Objectively Products Whereas Parallel Platforms Procedures",
  },
];

const clientItems = [
  {
    id: 0,
    src: "/woman.jpg",
    name: "Nattash Kelvin",
    job: "Designer",
    icon: <CiStar />,
    description:
      "dd an expcerpt from your personal biography, or simply. let the world know who you are and what you have to offer. Connect with site visitors on a personal level and make sure that your site.",
  },
  {
    id: 1,
    src: "/man.jpg",
    name: "Aslan Sofa",
    job: "Designer",
    icon: <CiStar />,
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overview.",
  },
];

export const Services = () => {
  return (
    <section className=" overflow-hidden flex flex-col items-center justify-center">
      {/* First components */}
      <div className="w-full h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="Our Services"
          contentText="We Are Offering"
          description="Collaboratively administrate empowered markets [lug and play network dynamically procrastinated"
        />
      </div>

      {/* Second Components */}
      <div className="p-10 xl:px-60 ">
        <HeroTitle
          title="Our Service"
          description="We Provide Professional Business Solutions."
        />

        {/* Start Card */}
        <div className="flex flex-col gap-2 mt-5 sm:flex-row flex-wrap items-center justify-center ">
          {ourItems.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-gray-300 p-4 sm:py-8 rounded-2xl w-80"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-xl">{item.title}</h1>
                  <span className="bg-red-300 text-white w-15 h-15 rounded-full flex items-center justify-center">
                    {item.icon}
                  </span>
                </div>
                <Link href="" className="text-blue-700 cursor-pointer">
                  {item.linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Third Components */}
      <div className="w-full bg-gray-800 p-10 text-white xl:px-60">
        <div className="flex flex-col items-center justify-center  ">
          <HeroTitle
            title="What We are offering"
            description="Services We are Providing to our customers"
          />
          <p className="text-center text-gray-400 xl:max-w-100">
            completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            service for state of the art customer service.{" "}
          </p>
        </div>

        {/* Start Card */}
        <div className="flex flex-col gap-5 justify-center items-center my-5 sm:flex-row sm:flex-wrap ">
          {offerItems.map((item) => {
            return (
              <div
                key={item.id}
                className="h-52 p-5 border-2 text-center flex flex-col items-center justify-around gap-3 shadow-lg bg-gray-900 rounded-2xl"
              >
                <span className="text-red-300">{item.icon}</span>
                <h1 className="font-bold">{item.title}</h1>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fourth Components */}
      <div className="flex flex-col p-10 xl:px-60 gap-5 xl:flex-row xl:items-center xl:justify-around">
        {/* First Item */}
        <div className="xl:w-1/2 ">
          <HeroTitle
            title="Why Choose Me"
            description="We Provide Solution To Grow YOUR Business"
            paragraph="leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition."
          />

          {/* Start Card */}
          <div className="flex flex-col gap-2 mt-5 sm:flex-row flex-wrap items-center justify-center ">
            {chooseItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border-gray-300 border-2 p-5 shadow-lg rounded-2xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-300 text-white flex items-center justify-center ">
                      {item.icon}
                    </span>
                    <span className="font-bold">{item.num}</span>
                    {item.star ? (
                      <span className="flex items-center gap-0.5">
                        {item.star}
                        {item.spanText}
                      </span>
                    ) : (
                      <span>{item.spanText}</span>
                    )}
                  </div>
                  <p className="text-gray-500 ml-10">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center mt-5">
            <Button text="Appointment" href="#" className="w-fit" />
          </div>
        </div>

        {/* second Item */}
        <div className="flex flex-col items-center gap-5  md:flex-row md:justify-center xl:flex-col ">
          {circleItems.map((item) => {
            return (
              <Circle
                key={item.id}
                value={item.value}
                title={item.title}
                description={item.description}
                paragraph={item.paragraph}
                bgCard="bg-gray-300"
              />
            );
          })}
        </div>
      </div>

      {/*Sixth Item */}
      <div className="xl:flex xl-justify-between md:p-15 xl:px-60">
        <div className="">
          <HeroTitle
            title="Testimonial"
            description="What Our Client Say's"
            paragraph="leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition."
          />
        </div>

        <div className="flex justify-center ">
          <div>
            <div className=" flex flex-col md:flex-row gap-2  px-10">
              {clientItems.map((item) => {
                return (
                  <ClientCard
                    key={item.id}
                    id={item.id}
                    src={item.src}
                    name={item.name}
                    job={item.job}
                    icon={item.icon}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
