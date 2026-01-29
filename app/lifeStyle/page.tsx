import { Button, PostCard } from "@/Components/global/GlobalWrapper";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

const items = [
  {
    id: 0,
    imgSrc: "/meeting.jpg",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "A Business Cousulting That Can Produce",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },
  {
    id: 1,
    imgSrc: "/meeting.jpg",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "Popular Email Marketing Techniques 2026",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },
];
export const LifeStyle = () => {
  return (
    <section className="p-5 xl:px-60">
      <div className="relative full h-100 xl:h-150 ">
        <Image src="/letsTalk.jpg" fill alt="" className="object-cover" />

        <div className="absolute bottom-0 left-0 w-full md:w-2/3 xl:w-1/2 grid grid-cols-6  text-white text-xs ">
          <span className="col-span-2 p-2 bg-red-300 px-3 py-2  text-center flex items-center justify-center">
            April 13/2026
          </span>
          <span className="col-span-2 p-2 bg-gray-700 flex flex-col  gap-1 items-center justify-center text-center border-r-2 border-l-2">
            <FaUser className="text-red-300" />
            Mirinda Done
          </span>
          <span className="col-span-2 bg-gray-700 flex flex-col  gap-1 items-center justify-center">
            <GiCrossMark className="text-red-300" />
            Business
          </span>
        </div>
      </div>

      <div className="py-5">
        <h1 className="font-bold text-xl ">
          Team Identifiers , Benefits , And How To Build One That Works
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          accusamus id minima at ipsa nostrum quibusdam voluptates. Natus ab
          temporibus ad fugit nam. Animi ab aliquid deserunt deleniti illo
          cupiditate? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellendus ratione dolorum tenetur provident enim officiis nam, iusto
          doloribus dolor iure fugiat, nulla libero distinctio? Cum quam tempore
          et quaerat eligendi.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-xl">The Work & Life Style For All</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsa quaerat accusantium dolor labore commodi quibusdam porro
          obcaecati voluptatum veniam quo vero dolores accusamus nemo, omnis cum
          earum a harum.
        </p>
        <ul className="list-disc list-inside my-5 text-gray-500 text-sm md:text-base">
          <li>
            Dynamically target high-payoff intellectual capital for customized.
          </li>
          <li>interactivety Procrastinate high-payoff content</li>
          <li>
            Credibly reinter mediate backend ideas fr cross-platform models.
          </li>
        </ul>
      </div>

      <div className="relative w-full bg-red-300 text-gray-900  p-2 md:py-10 md:px-20 shadow-2xl rounded-b-xl my-10">
        <p>
          For the longest time , computers have been associated with work ,
          Mainframe were for the army, goverment agences , and then large
          compaines. Workstaions were for engineers and software programmers.
          PCs were initialy for other white-collar jobs.
        </p>

        <div className="absolute -top-5 left-0 h-5 w-full bg-red-900 z-10"></div>
      </div>

      <div>
        <h1 className="font-bold text-xl">The Work & Life Style For All</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsa quaerat accusantium dolor labore commodi quibusdam porro
          obcaecati voluptatum veniam quo vero dolores accusamus nemo, omnis cum
          earum a harum.
        </p>
        <ul className="list-decimal list-inside my-5 text-gray-500 text-sm md:text-base">
          <li>
            it bring the right people together with all the right information
            and tools to get work done
          </li>
          <li>
            We Provide operational effeciency, data secuerty, and flexible scale
          </li>
          <li>
            Your best work, together in one package that works seamlessly from
            your computer
          </li>
        </ul>
      </div>

      <div>
        <div className="flex justify-between items-center my-5">
          <h1 className="font-bold text-2xl">Related News</h1>
          <Button text="More News" href="" />
        </div>

        <div className="px-5 py-10 flex flex-col md:flex-row md:flex-wrap gap-10 items-center justify-center md:mt-10">
          {items.map((item) => {
            return (
              <PostCard
                key={item.id}
                imgSrc={item.imgSrc}
                month={item.month}
                date={item.date}
                middleIcon={item.middleIcon}
                middleText={item.middleText}
                lastIcon={item.lastIcon}
                lastText={item.lastText}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
