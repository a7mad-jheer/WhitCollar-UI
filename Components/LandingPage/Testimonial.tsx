import Image from "next/image";
import { HeroTitle } from "@/Components/global/GlobalWrapper";

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
      <div className="mb-5 px-10 xl:w-[40%]">
        <HeroTitle
          title="Testimonial"
          description="What Our Client Say's"
          paragraph="leverage aglie frameworks to provide a robust synopsis for high level
          overviews. thinking to further the overall proppsition."
        />
      </div>

      <div>
        <div className=" flex flex-col md:flex-row gap-2  px-10">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col bg-gray-100 p-5 gap-3 md:w-1/2 xl:w-72 h-fit"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-20 h-20 rounded-full overflow-auto">
                    <Image
                      fill
                      src={item.src}
                      alt="#"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <p className="text-gray-500">{item.job}</p>
                    <span className="flex gap-1 items-center">
                      {item.icon}
                      {item.icon}
                      {item.icon}
                      {item.icon}
                      {item.icon}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
