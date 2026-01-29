import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { BgBlur, HeroTitle } from "../global/GlobalWrapper";

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
    // <section className="relative w-full h-full">
    //   <div className="relative w-full h-screen">
    //     <Image fill alt="" src="/meeting.jpg" className="object-cover" />
    //   </div>

    //   <div className="absolute  inset-0 bg-gray-950/80 md:backdrop-blur-md backdrop-blur-xs xl:w-2/5  h-full text-white ">
    //     <div className="flex flex-col justify-center items-center w-full h-full ">
    //       <div className="sm:w-130 h-100 flex flex-col items-center justify-center">
    //         <div className="p-5 ">
    //           <HeroTitle title="Welcome to Whitecollar Soluation" />
    //           {/* <h1 className="sm:text-2xl text-xl mb-3 flex items-center gap-2"><span><GoDotFill className= "text-red-300"/></span> Welcome to Whitecollar Soluation</h1> */}
    //           <p className="md:text-6xl text-2xl font-bold mb-4 md:leading-18">
    //             The Best Value For{" "}
    //             <span className="text-red-300">Business</span> and Corporation
    //           </p>
    //           <p className="text-gray-400 md:text-xl mb-5 ">
    //             Collaboratively administrate empowered markets plug and play
    //             networks dymamically procrastinated
    //           </p>
    //         </div>

    //         <div className="flex items-center  gap-5 sm:text-2xl ">
    //           <button className=" bg-red-300 sm:p-5 py-4 px-2 rounded-xl cursor-pointer">
    //             Get Consulting
    //           </button>
    //           <div>
    //             <Link
    //               href="#"
    //               className="flex gap-2 items-center justify-center"
    //             >
    //               <span>
    //                 <FaPlayCircle size={30} />
    //               </span>
    //               <span className="underline">Watch Video</span>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
