import { BgBlur, Button, HeroTitle, PostCard } from "@/Components/global/page";
import { FaUser } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";

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

  {
    id: 2,
    imgSrc: "/meeting.jpg",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "What are Backlinks And Why They Are Important",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },

  {
    id: 3,
    imgSrc: "/meeting.jpg",
    date: "11/2/2026",
    month: "Aprile",
    middleText: "Mirinda Done",
    middleIcon: <FaUser className="text-red-300" />,
    lastText: "Business",
    lastIcon: <GiCrossMark className="text-red-300" />,
    title: "Importance Of Keyword Research In A Blog",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaedeleniti, obcaecati praesentium minus reprehenderit odio quasiearum molestias numquam nesciunt fuga sint aliquam aspernatur isteet quod molestiae modi perferendis?",
    link: "Read More",
  },
];

export const RecentNew = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="Recent News"
          contentText="We Keep You Update"
        />
      </div>

      <div className="py-10 xl:px-30">
        <HeroTitle
          title="Our Recent News"
          description="Featured News And Insights"
        />

        {/* Start Post Cards */}
        <div className="px-5 flex flex-col md:flex-row md:flex-wrap gap-10 items-center justify-center md:mt-10">
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
        <div className="md:mt-20  flex justify-center">
          <Button text="Next" href="#" icon={<FaAngleRight />} />
        </div>
      </div>
    </section>
  );
};

export default RecentNew;
