import { BgBlur, LatestCard } from "@/Components/global/page";
import Image from "next/image";
import { FaAngleDoubleRight, FaCalendarAlt } from "react-icons/fa";

const leftItems = [
  { id: 0, title: "Client :", description: "Katherine Coloman" },
  { id: 2, title: "Location :", description: "New York United State" },
  { id: 3, title: "Project Data :", description: "15 Septemper 2023" },
  { id: 4, title: "Website :", description: "http://Whitcollar.com" },
];

const items = [
  {
    id: 0,
    imageSrc: "/Photo (8).png",
    title: "Financial Investment",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 1,
    imageSrc: "/Photo (9).png",
    title: "Marketing Strategy",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 2,
    imageSrc: "/Photo (10).png",
    title: "Busniess Consulting",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
];

export const LtTechs = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="LT Techs"
          contentText="Financial Investment"
        />
      </div>

      <div className="p-5 xl:px-50 md:flex md:flex-col md: gap-2 md:p-20 ">
        <div className="relative w-full h-65 md:h-150  ">
          <Image alt="#" src="/agreed.jpg" fill className="object-cover" />
        </div>

        <div className=" md:flex md:gap-10">
          {/* Left Content */}
          <div className="md:w-[40%]">
            <h1 className="bg-red-300 p-5 text-center font-bold text-xl text-white">
              Project Details
            </h1>
            <ul className="bg-gray-200 p-5">
              {leftItems.map((item) => {
                return (
                  <li key={item.id} className=" ">
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-gray-500">{item.description}</p>
                    <hr className="my-5 text-gray-400" />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Content */}
          <div className=" md:w-[70%]">
            <h1 className="font-bold text-xl my-5">Project Information</h1>

            <div className="flex flex-col gap-5">
              <p className="text-gray-500 ">
                Distinctively re-engineer revolutionary meta service and premium
                architectures incubate intuitive opportunities and real-time
                potentialities. Appropriately communicates once one texhnology
                after plug-and-play networks.
              </p>
              <p className="text-gray-500 ">
                Quickly aggregates users and worldwides potentialties
                progressively plagiarize resource leveling e-commerce throgh
                resource leveling cores competencies dramatically mesh low risk
                high yield alignments before transparent e-tailers.
              </p>
              <ul className="list-disc list-inside text-gray-500">
                <li>The printing and typesetting industry.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>it has survived not only five centuries.</li>
              </ul>

              <p className="text-gray-500">
                Compellingly embrac empowered e-business after user friendly
                intellectual capitals Interactively actualize front-end
                processes with effectives convergenced Syynergistically deliver
                performanced based methods empowerment whereas distributed
                expertised efficiently enable ebabled sources and cost effective
                products completely ethical cimmunities.
              </p>

              <ul className="list-decimal list-inside text-gray-500 ">
                <li>The printing and typesetting industry.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>it has survived not only five centuries.</li>
              </ul>

              <p className="text-gray-500">
                Compellingly embrac empowered e-business after user friendly
                intellectual capitals Interactively actualize front-end
                processes with effectives convergenced Syynergistically deliver
                performanced based methods empowerment whereas distributed
                expertised efficiently enable ebabled sources and cost effective
                products completely ethical cimmunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 xl:px-50">
        <h1 className="font-bold text-xl my-5 text-center">Related Project</h1>

        <div className="flex flex-col gap-5 py-5 md:flex-row md:flex-wrap justify-center">
          {items.map((item) => {
            return (
              <LatestCard
                key={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                date={item.date}
                dateIcon={item.dateIcon}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LtTechs;
