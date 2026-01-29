import { BgBlur } from "@/Components/global/page";
import { FaChevronRight } from "react-icons/fa";


const items = [
  "Main Questions",
  "Common Queries",
  "General Questions",
  "Legai information",
];

export const QuickSolution = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="Quick Solution"
          contentText="Frequently Asked Questions"
        />
      </div>

      <div className="flex flex-col gap-5 p-5 md:flex-row xl:px-60 xl:py-30">
        <div className="bg-gray-300 p-5 shadow-2xs rounded-2xl text-center md:min-w-[40%] md:h-fit">
          <h1 className=" font-bold text-xl mb-5 ">Categories</h1>

          <ul className="flex flex-col gap-1 ">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="p-3 font-semibold hover:bg-red-300 hover:text-white duration-150 border-gray-400 border-2 text-gray-600"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <ul className="flex flex-col gap-3 xl:gap-8">
            <li className="border-2 border-gray-200 px-2 py-5 flex justify-between shadow-2xs">
              <h1 className="font-semibold">how Does Our Pricing Works ?</h1>
              <span><FaChevronRight /></span>
            </li>

            <li className="border-2 border-gray-200 px-2 py-5 shadow-2xs">
              <div className=" flex justify-between mb-3">
                <h1  className="font-semibold">how Does Our Pricing Works ?</h1>
                <span><FaChevronRight /></span>
              </div>

              <p className="text-gray-500">
                Objectivly innovated empowered manufactured products where as
                parallel holisticly predominat extensible testing procedures
                reliable supply chains dramatically engage top-line web services
                vis-a-vis cutting-edge deliverables.
              </p>
            </li>

            <li className="border-2 border-gray-200 px-2 py-5 flex justify-between shadow-2xs">
              <h1  className="font-semibold">Do you offer volume or layalty discounts ?</h1>
              <span><FaChevronRight /></span>
            </li>

            <li className="border-2 border-gray-200 px-2 py-5 flex justify-between shadow-2xs">
              <h1  className="font-semibold">What types of compaines do you work with ?</h1>
              <span><FaChevronRight/></span>
            </li>
          </ul>
        </div>
      </div>


    </section>
  );
};

export default QuickSolution;
