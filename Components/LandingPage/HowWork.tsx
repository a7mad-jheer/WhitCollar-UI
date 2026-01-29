"use client";
import { MdOutlineDone } from "react-icons/md";
import { Button, HeroTitle } from "@/Components/global/GlobalWrapper";

const items = [
  {
    id: 0,
    icon: <MdOutlineDone />,
    title: "Planning",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition.",
  },
  {
    id: 1,
    icon: <MdOutlineDone />,
    title: "Briefing",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition.",
  },
  {
    id: 2,
    icon: <MdOutlineDone />,
    title: "Evaluation",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition.",
  },
];

export default function HowWork() {
  return (
    <section className="overflow-hidden grid xl:grid-cols-12 grid-cols-1  gap-10 xl:py-20 xl:px-50  items-stretch  p-15 ">
      {/* First Components */}
      <div className="  md:col-span-6  ">
        <div className="mb-5 ">
          <HeroTitle
            className=" xl: mb-5 text-black"
            title="How We Work"
            description={`To Get Your Business To The Next Level `}
            titleSize="text-black"
          />
          <p className="text-black text-center sm:text-start mt-2  border-red-300 p-5 border-t-2 border-x-2">
            leverage aglie frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall proppsition.
          </p>
        </div>

        <div className=" text-white bg-red-300 flex items-center justify-center gap-2 p-6 rounded-2xl border-red-300 border-x-3">
          <div className="">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex flex-col items-center justify-center ">
              <span>562+</span>
              <span>Project</span>
            </div>
          </div>

          <p>
            We Have <span className="font-bold">50+</span> Years Of Experience.
            We Offer <span className="font-bold">Whitecollar</span> Services To
            You
          </p>
        </div>

        <div className=" flex flex-col gap-1">
          {items.map((item, index) => {
            const isLastCard = index === items.length - 1;
            return (
              <div
                key={item.id}
                className={`flex gap-2 mt-10  p-5 border-red-300 ${
                  isLastCard ? "border-b-2" : ""
                }  border-x-2 `}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex  items-center gap-2">
                    <span className="text-white bg-red-300 w-5 h-5 rounded-full flex items-center justify-center ">
                      {item.icon}
                    </span>
                    <h1>{item.title}</h1>
                  </div>

                  <p className="ml-2">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Second Component */}
      <div className=" md:col-span-6 flex flex-col text-black">
        <HeroTitle
          title="Book Now"
          description="Get Free Business Appointment"
          className="xl:mb-15 "
          titleSize="text-black"
        />

        <form className="bg-white border-red-300 border-2 shadow-current text-gray-800 md:p-20 p-5 rounded flex flex-col gap-3 flex-1 justify-between ">
          <input
            className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
            type="text"
            placeholder="Phone Number"
          />
          <div>
            <input
              className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
              type="date"
              placeholder="Date"
            />
            <input
              className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
              type="time"
              placeholder="Time"
            />
          </div>
          <textarea
            rows={4}
            className="p-4 border-gray-200 border-2 rounded outline-none text-gray-800"
            placeholder="Service Description"
          />

          <Button text="Submit" href="#" />
        </form>
      </div>
    </section>
  );
}
