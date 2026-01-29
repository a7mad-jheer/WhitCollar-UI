import Image from "next/image";
import { Button, HeroTitle } from "@/Components/global/GlobalWrapper";

export default function SubScribe() {
  return (
    <section className="w-full xl:px-80 sm:px-20 py-20">
      <div className="relative  w-full h-112.5 ">
        <Image fill alt="" src="/meeting.jpg" className="object-cover  " />
        <div className="absolute inset-0 w-full h-112.5 bg-gray-900/20  backdrop-blur-xl "></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-full flex flex-col gap-10 items-center text-white">
          <HeroTitle
            title=" Subscribe whitecollar"
            description={
              <div className="">
                Need An Experoenced
                <span className="text-red-300">whitecollar</span> job service?
                Contact Us
              </div>
            }
            paragraph={
              <div className="text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                deleniti, obcaecati praesentium minus reprehenderit odio quasi
              </div>
            }
          />

          <Button href="#" text="Get Started" />
        </div>
      </div>
    </section>
  );
}
