import { Button, HeroTitle, PostCard } from "@/Components/global/GlobalWrapper";
import { FaUser } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

const items = [
  {
    id: 0,
    imgSrc: "/Photo (17).png",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "ABusiness Cousulting That Can Produce",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },
  {
    id: 1,
    imgSrc: "/Photo (21).png",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "ABusiness Cousulting That Can Produce",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },
];

export default function LatestPosts() {
  return (
    <section className="p-10 md:py-30 px-5 ">
      <div className="flex flex-col items-center py-5 gap-5">
        <HeroTitle title="Our Recent News" description="Latest Posts" />
        <Button href="#" text="More News" />
      </div>

      {/* Comment Card Start */}
      <div className=" flex flex-col md:flex-row gap-10 items-center justify-center md:mt-10">
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
      {/* Comment Card End */}
    </section>
  );
}
