import {
  BgBlur,
  HeroTitle,
  LatestCard,
} from "@/Components/global/GlobalWrapper";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const items = [
  {
    id: 0,
    imageSrc: "/meeting.jpg",
    title: "Financial Investment",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 1,
    imageSrc: "/meeting.jpg",
    title: "Marketing Strategy",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 2,
    imageSrc: "/meeting.jpg",
    title: "Busniess Consulting",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 3,
    imageSrc: "/meeting.jpg",
    title: "Financial Investment",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 4,
    imageSrc: "/meeting.jpg",
    title: "Web Development",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
  {
    id: 5,
    imageSrc: "/meeting.jpg",
    title: "Financial Investment",
    date: "sep 2022",
    icon: <FaAngleDoubleRight size={20} />,
    dateIcon: <FaCalendarAlt />,
  },
];

export const LatestProject = () => {
  return (
    <section className="">
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="The Case Stidies"
          contentText="Our Latest Project"
        />
      </div>

      <div className="p-5 xl:px-40 xl:py-20">
        <HeroTitle
          title="Latest Projects"
          description="Discover Our Latest Client Projects"
          paragraph={
            <p>
              leverage aglie frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proppsition.
            </p>
          }
        />

        <div className="flex flex-col gap-10 mt-10 md:flex-row md:flex-wrap justify-center">
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

export default LatestProject;
