import { ClientCard, HeroTitle } from "@/Components/global/GlobalWrapper";

import { CiStar } from "react-icons/ci";

const items = [
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

export default function Testimonial() {
  return (
    <section className="xl:flex xl:justify-center gap-2 md:px-15">
      <div className="mb-5 md:px-10 px-5 xl:w-[20%]">
        <HeroTitle
          title="Testimonial"
          description="What Our Client Say's"
          paragraph="leverage aglie frameworks to provide a robust synopsis for high level
          overviews. thinking to further the overall proppsition."
        />
      </div>

      <div className=" flex flex-col md:flex-row gap-2  px-10">
        {items.map((item) => {
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
    </section>
  );
}
