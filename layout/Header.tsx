import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className= " hidden  bg-gray-800  min-w-full lg:flex justify-around items-center py-5 text-white text-xs">
      <div className="flex items-center  gap-5">
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-blue-600" size={20} />
          <p>24 olive street,Palestine,Gaza</p>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineEmail className="text-blue-600" size={20}/>
          <p>ahmed-jheer@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <FaRegClock className="text-blue-600" size={20}/>
          <p>Mon-Fri : 8:00 am - 5:00 pm</p>
        </div>

        <ul className="flex gap-2">
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaSquareFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}
