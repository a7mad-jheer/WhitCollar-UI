import Image from "next/image";
import {Button, HeroTitle } from "@/Components/global/page"
import { FaUser } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";

export default function LatestPosts() {
  return (
    <section className="p-10 md:py-30 px-15 ">
      <div className="flex flex-col items-center py-5 gap-5">
        <HeroTitle title="Our Recent News" description="Latest Posts" />
        <Button href="#" text="More News" />
      </div>

      {/* Comment Card Start */}
      <div className="px-5 flex flex-col md:flex-row gap-10 items-center justify-center md:mt-10">
        <div className=" w-full md:w-200 xl:w-120 sm:h-125 h-160">
          <div className="relative w-full  h-90">
            <Image src="/meeting.jpg" alt="#" fill className="object-cover" />

            <div className="absolute bottom-0 left-0 w-full grid grid-cols-6  text-white text-xs ">
              <span className="col-span-2 p-2 bg-red-300 px-3 py-2  text-center flex items-center justify-center">
                Aprile 11/2//2026
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

          <div className="mt-5 ">
            <h1 className="font-semibold mb-2 ">
              ABusiness Cousulting That Can Produce
            </h1>
            <p className="text-gray-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              deleniti, obcaecati praesentium minus reprehenderit odio quasi
              earum molestias numquam nesciunt fuga sint aliquam aspernatur iste
              et quod molestiae modi perferendis?
            </p>
            <Link href="#" className="underline text-blue-700 mt-5 mb-2">
              Read More
            </Link>
          </div>
        </div>

        <div className=" w-full md:w-200 xl:w-120 sm:h-125 h-160">
          <div className="relative w-full  h-90">
            <Image src="/meeting.jpg" alt="#" fill className="object-cover" />

            <div className="absolute bottom-0 left-0 w-full grid grid-cols-6  text-white text-xs ">
              <span className="col-span-2 p-2 bg-red-300 px-3 py-2  text-center flex items-center justify-center">
                Aprile 11/2//2026
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

          <div className="mt-5 ">
            <h1 className="font-semibold mb-2 ">
              ABusiness Cousulting That Can Produce
            </h1>
            <p className="text-gray-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              deleniti, obcaecati praesentium minus reprehenderit odio quasi
              earum molestias numquam nesciunt fuga sint aliquam aspernatur iste
              et quod molestiae modi perferendis?
            </p>
            <Link href="#" className="underline text-blue-700 mt-5 mb-2">
              Read More
            </Link>
          </div>
        </div>
      </div>
      {/* Comment Card End */}
    </section>
  );
}
