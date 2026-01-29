import { Button } from "@/Components/global/GlobalWrapper";
import Image from "next/image";

export const NotFound = () => {
  return (
    <section className="relative w-full h-175">
      <Image alt="" src="/meeting.jpg" fill className="object-cover" />

      <div className="absolute inset-0 w-full h-full bg-gray-800/60 backdrop-blur-xl z-20 text-white md:px-30">
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-9xl">404</h1>
          <h3 className="font-semibold text-4xl">Oops! Page Not Found!</h3>
          <p className="text-gray-300 xl:w-125 text-center">
            Leveling customer service for state of the art custemer service
            innovate product for reliable supply engage web services
            cutting-edge deliverables
          </p>
          <div className="mt-10">
            <Button text="Back To Home" href="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
