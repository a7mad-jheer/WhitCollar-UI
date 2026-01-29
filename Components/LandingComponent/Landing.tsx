import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { BgBlur } from "../global/page";

export default function Landing() {
  return (
    <BgBlur
      imgSrc="/meeting.jpg"
      textTitle="Welcome to Whitecollar Soluation"
      contentText={
        <p className="md:text-6xl text-2xl font-bold  md:leading-18 text-center xl:text-start">
          The Best Value For <span className="text-red-300">Business</span> and
          Corporation
        </p>
      }
      description="Collaboratively administrate empowered markets plug and play networks dymamically procrastinated"
    >
      <div className="flex items-center  gap-5 sm:text-2xl ">
        <button className=" bg-red-300 sm:p-5 py-4 px-2 rounded-xl cursor-pointer">
          Get Consulting
        </button>
        <div>
          <Link href="#" className="flex gap-2 items-center justify-center">
            <span>
              <FaPlayCircle size={30} />
            </span>
            <span className="underline">Watch Video</span>
          </Link>
        </div>
      </div>
    </BgBlur>
  );
}
