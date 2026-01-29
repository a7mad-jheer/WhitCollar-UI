import Image from "next/image";
import {Button, HeroTitle } from "@/Components/global/page"
import Testimonial from "./Testimonial";

const items = [
  { id: 0, src: "/Photo (8).png" },
  { id: 1, src: "/Photo (9).png" },
  { id: 2, src: "/Photo (10).png" },
  { id: 3, src: "/Photo (11).png" },
];

export default function CheckProject() {
  return (
    <section className="py-30 ">
      <div>
        <div className="flex flex-col gap-5 md:flex-row justify-around items-center mb-5">
          <div>
            <HeroTitle
              title="Our Project"
              description="You Can Check Our Projects as Inspirations."
            />
          </div>

          <Button className="" text="More Work" href="#" />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-3 px-10">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="relative  md:w-[40%] xl:w-[22%] w-96 h-96"
              >
                <Image fill src={item.src} alt="#" className="object-cover" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center ">
        <hr className="text-red-300 w-2/3 my-30" />
      </div>
      <Testimonial />
    </section>
  );
}
