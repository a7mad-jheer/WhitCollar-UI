import Image from "next/image";
import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import {
  BgGrayCard,
  Button,
  HeroTitle,
} from "@/Components/global/GlobalWrapper";

export default function BusinessPlan() {
  return (
    <BgGrayCard
      srcImage="/meeting.jpg"
      title="We're Ready To Grow Your Business With Us"
      description="leverage aglie frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall proppsition."
      linkText="Get In Touch"
      linkHref="#"
    >
      <div className="xl:max-w-[70%] max-w-120 ">
        <div className="flex flex-col ">
          <HeroTitle title="Welcome Whitecollar" />

          <h1 className="text-2xl font-bold my-3 text-center xl:text-start">
            We Care About Your Business Plan.
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            pariatur! Error mollitia corrupti iure! Esse, dolorum fugit
            voluptatem aspernatur optio deleniti est minus.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis cum quasi dicta aliquid.
          </p>

          <div className="flex flex-col gap-3 ">
            <label className="flex items-center gap-1 font-semibold">
              <input className="h-4 w-4" type="checkbox" />
              Components of a Business Strategy
            </label>
            <label className="flex items-center gap-1 font-semibold">
              <input className="h-4 w-4" type="checkbox" />
              Business Consulting
            </label>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 my-3">
            <div className=" flex gap-3 border-2 border-gray-300 rounded p-4">
              <IoNewspaperOutline className="text-red-300" size={40} />
              <div>
                <h1 className="text-xl font-bold">Experience</h1>
                <p className="text-sm text-gray-400">
                  Levarage Framworks To Provide Werment
                </p>
              </div>
            </div>
            <div className=" flex gap-3 border-2 border-gray-300 rounded p-4">
              <FaTrophy className="text-red-300" size={40} />
              <div>
                <h1 className="text-xl font-bold">Awards Winner</h1>
                <p className="text-sm text-gray-400">
                  Levarage Framworks To Provide Werment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button text="More About Us" href="#" />
        </div>
      </div>
    </BgGrayCard>
  );
}
