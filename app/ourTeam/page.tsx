import { BgBlur, HeroTitle, TeamCard } from "@/Components/global/page";
import Image from "next/image";

const items = [
  {
    id: 0,
    srcImage: "/member1.jpg",
    name: "Hitham Sharo",
    career: "Managing Director",
  },
  {
    id: 1,
    srcImage: "/member2.jpg",
    name: "Nattasha Kelvin",
    career: "Designer",
  },
  {
    id: 2,
    srcImage: "/member3.jpg",
    name: "Sozi katcha",
    career: "Marketing Specialist",
  },
  {
    id: 3,
    srcImage: "/member1.jpg",
    name: "Hitham Sharo",
    career: "Managing Director",
  },
  {
    id: 4,
    srcImage: "/member2.jpg",
    name: "Nattasha Kelvin",
    career: "Designer",
  },
  {
    id: 5,
    srcImage: "/member3.jpg",
    name: "Sozi katcha",
    career: "Marketing Specialist",
  },
];

export const OurTeam = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/letsTalk.jpg"
          textTitle="Our Team"
          contentText="Meet Our Experts"
        />
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center mt-5 xl:px-60">
        {items.map((item) => {
          return (
            <TeamCard
              key={item.id}
              srcImage={item.srcImage}
              name={item.name}
              career={item.career}
            />
          );
        })}
      </div>

      <div className="p-5 xl:px-60 xl:flex">
        <div className="bg-gray-800 text-white p-5 md:p-10 xl:w-[50%]" >
          <HeroTitle title="Dedicated Team" titleSize="text-center" description ="Professional Individual" paragraph ={<p>Leverage aglie frameworks to provided a synopsis for high overveiws thinking overall proposition.</p>} />

          <div className=" flex flex-col md:flex-row  gap-10 md:gap-20 xl:gap-5 flex-wrap items-center justify-center ">
            <div className="relative z-50 h-40 w-40 flex items-center justify-center rounded-full bg-red-200 text-gray-900 font-bold text-2xl ">

              Year Of 2026
            </div>

            <div className="flex-1 flex flex-col text-center justify-center md:items-start md:text-start gap-2 ">
              <h1 className="font-bold text-4xl">75%</h1>
              <h4 className="text-red-300 font-semibold text-2xl ">Income Statement</h4>
              <p className="text-gray-500">Leverage aglie frameworks to provided a synopsis for high overveiws thinking overall proposition.</p>
            </div>
          </div>
        </div>

        <div className="relative w-1/2 h-120 hidden xl:block xl:flex-1 ">
          <Image 
          fill
          src ="/meeting.jpg"
          alt=""
          className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
