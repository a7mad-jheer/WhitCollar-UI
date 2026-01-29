import {
  BgBlur,
  BgGrayCard,
  Button,
  HeroTitle,
  TeamCard,
} from "@/Components/global/GlobalWrapper";
import { FaCalendarPlus } from "react-icons/fa6";
import { FaUserTie, FaSmileBeam } from "react-icons/fa";
import {
  FaHeartCircleCheck,
  FaAward,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const items = [
  {
    id: 0,
    label: "Our Vision",
    text: "Capitalize on how hanging fruit to identify a ballpark value added activity to beta clickthroughs.",
  },
  {
    id: 1,
    label: "Our Mision",
    text: "Capitalize on how hanging fruit to identify a ballpark value added activity to beta clickthroughs.",
  },
];

const workItems = [
  {
    id: 0,
    icon: <FaCalendarPlus size={30} />,
    title: "Make Appointment",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews.",
    linkText: "Testimonials",
  },
  {
    id: 1,
    icon: <FaUserTie size={30} />,
    title: "Consultation",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews.",
    linkText: "Testimonials",
  },
  {
    id: 2,
    icon: <FaHeartCircleCheck size={30} />,
    title: "Enjoy The Service",
    description:
      "leverage aglie frameworks to provide a robust synopsis for high level overviews.",
    linkText: "Testimonials",
  },
];

const statisticItems = [
  {
    id: 0,
    icon: <FaAward size={50} />,
    num: "10+",
    title: "Years Of Experience",
    description: "Synopsishigh Level Overviews Value Proposition.",
  },
  {
    id: 1,
    icon: <FaSmileBeam size={50} />,
    num: "5960",
    title: "Satisfied Client",
    description: "Synopsishigh Level Overviews Value Proposition.",
  },
  {
    id: 2,
    icon: <FaScrewdriverWrench size={50} />,
    num: "5k",
    title: "IT Problems Solved",
    description: "Synopsishigh Level Overviews Value Proposition.",
  },
  {
    id: 3,
    icon: <MdAdminPanelSettings size={50} />,
    num: "25+",
    title: "Pro Team Members",
    description: "Synopsishigh Level Overviews Value Proposition.",
  },
];

const expertsItems = [
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
];

const AboutUs = () => {
  return (
    <section>
      {/* First Content */}
      <div className="h-96 overflow-hidden flex flex-col items-center justify-center">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="About Us"
          contentText="Know About Us"
          description="Collaborativelly administrate empowered markets plug and play networks dynamically procrastinated"
        />
      </div>

      {/* Second Content */}
      <div>
        <BgGrayCard
          srcImage="/Photo@2x.png"
          title="We're Ready To Grow Your Business With Us"
          description="leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition."
          linkText="Get In Touch"
          linkHref="#"
        >
          <div className="xl:w-xl">
            <HeroTitle
              title="Welcome Whitecollar"
              description="We Care About Your Business Plain"
              paragraph="leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition. thinking to further the overall proppsition."
            />
            <p className="text-gray-500 text-center xl:text-start mt-2">
              leverage aglie frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proppsition.
            </p>

            {/* Items Cards */}
            <div className="flex flex-col gap-3 my-5 items-center justify-center sm:flex-row">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-gray-400 border-2 p-3 rounded-2xl"
                >
                  <div className="flex gap-2 items-center mb-2">
                    <label>
                      <input type="checkbox" className="h-4 w-4" />
                      {item.label}
                    </label>
                  </div>
                  <p className="ml-6 text-sm text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button text="More About Us" href="#" />
            </div>
          </div>
        </BgGrayCard>
      </div>

      {/* Third Content - Work Process */}
      <div className="p-10 xl:my-20 xl:mx-20">
        <div className="flex flex-col justify-center items-center text-center">
          <HeroTitle
            title="Work Process"
            description="How We Work"
            titleSize="text-center"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {workItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-400 py-8 px-4 rounded-2xl flex flex-col justify-center items-center"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-red-300 flex justify-center items-center w-15 h-15 rounded-full">
                {item.icon}
              </div>
              <h1 className="font-semibold text-[18px] my-2">{item.title}</h1>
              <p className="text-gray-700 mb-2 text-center">
                {item.description}
              </p>
              <Link href="#" className="text-gray-900 font-semibold">
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Content - Statistics */}
      <div className="bg-blue-50 grid grid-cols-12 gap-5 px-5 xl:px-20 py-10 justify-items-center">
        {statisticItems.map((item) => (
          <div
            key={item.id}
            className="col-span-12 sm:col-span-6 xl:col-span-3 flex flex-col items-center gap-3 pb-5"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-gray-700 rounded-full text-red-300">
              {item.icon}
            </div>
            <span className="text-3xl text-red-300 font-bold">{item.num}</span>
            <h1 className="font-semibold text-xl">{item.title}</h1>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Fifth Content - Short Video */}
      <div className="relative h-100 w-full sm:px-20">
        <Image src="/meeting.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 backdrop-blur-xl bg-blue-400/40">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <HeroTitle
              title="Short Video"
              description="Our Presentation"
              paragraph="Collaboratively Administrate channels whereas virtual tailers Prodominate procedures reliable supply chains."
              titleSize="xl:justify-center"
            />
            <div className="flex items-center justify-center mt-10">
              <FaPlayCircle size={50} />
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Content - Team */}
      <div className="py-20 px-5">
        <HeroTitle title="Our Team" description="Meet Our Experts" />
        <div className="flex flex-wrap gap-5 items-center justify-center mt-5">
          {expertsItems.map((item) => (
            <TeamCard
              key={item.id}
              srcImage={item.srcImage}
              name={item.name}
              career={item.career}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
