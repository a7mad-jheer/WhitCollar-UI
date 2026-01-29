import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BgBlur , Circle} from "../global/page";



export default function ChooseMe() {
  const items = [
    { id: 1, value: 95, title: "Clients", description: "Quick Resposive" },
    { id: 2, value: 85, title: "Project", description: "Finished Jobs" },
  ];

  return (
    <BgBlur
      className="text-center sm:text-start "
      imgSrc="/meeting.jpg"
      textTitle="Why Chose Me"
      contentText="We Provide Solution To Grow Your Business"
      description="leverage aglie frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proppsition."
    >
      <div className="">
        {/* start card*/}
        <div className="flex gap-5  md:gap-10">
          {items.map((item) => {
            return (
              <div key={item.id}>
              <Circle
                value={item.value}
                title={item.title}
                description={item.description}
              />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-10  md:flex-row md:gap-10 py-5">
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <FiCheck />
              <span>2,000+</span>
              <span>Active clients</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheck />
              <span>2,000+</span>
              <span className="flex">
                {" "}
                <span className="text-red-300 flex gap-1 items-center mx-1">
                  5 <FaStar /> stars{" "}
                </span>
                reviews
              </span>
            </div>
          </div>

          <div className="flex items-center gap-10 justify-between md:flex-col md:gap-1">
            <div className="flex items-center gap-2">
              <FiCheck />
              <span>106+</span>
            </div>

            <Link className="underline text-red-300 cursor-pointer" href="">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </BgBlur>
  );
}
