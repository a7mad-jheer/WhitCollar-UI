import { Button, HeroTitle } from "@/Components/global/GlobalWrapper";
import { PiKeyhole } from "react-icons/pi";

export const ProtectPage = () => {
  return (
    <section className="p-5 md:px-60 md:flex md:justify-center md:items-center">
      <div className="flex flex-col justify-center items-center gap-5 bg-gray-300 shadow-2xl py-10 md:w-fit md:px-20">
        <span className="text-red-300 ">
          <PiKeyhole size={150} />
        </span>
        <HeroTitle title="Password" description="Protected Page" />
        <div className="flex flex-col items-center justify-center gap-5 ">
          <input
            className="bg-gray-200 outline-none  px-3 py-4 rounded"
            type="text"
            placeholder="Your Password"
          />
          <Button
            text="Submit"
            href="#"
            className="w-full flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ProtectPage;
