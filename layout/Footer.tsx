import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, HeroTitle } from "@/Components/global/GlobalWrapper";

export default function Footer() {
  const items = [
    {
      id: 0,
      title: <HeroTitle title="Quick Link" />,
      links: [
        { id: 0, title: "Home", href: "/" },
        { id: 1, title: "About Us", href: "/aboutUs" },
        { id: 2, title: "Blog", href: "#" },
        { id: 3, title: "Services", href: "/services" },
        { id: 4, title: "Contact", href: "#" },
      ],
    },
    {
      id: 1,
      title: <HeroTitle title="Our Services" />,
      links: [
        { id: 0, title: "Financial Consulting", href: "/quickSolution" },
        { id: 1, title: "Business Mangement", href: "/businessManagement" },
        { id: 2, title: "Consultant & Programs", href: "#" },
        { id: 3, title: "Company Mangement", href: "#" },
        { id: 4, title: "Insurance & Finance", href: "#" },
      ],
    },
    {
      id: 2,
      title: <HeroTitle title="Utility Page" />,
      links: [
        { id: 0, title: "Style Guide", href: "#" },
        { id: 1, title: "Licenses", href: "/" },
        { id: 2, title: "Instructions", href: "#" },
        { id: 3, title: "Changelog", href: "#" },
        { id: 4, title: "404 Page", href: "#" },
      ],
    },
  ];

  const icons = [FaInstagram, FaFacebookF, FaTwitter, FaTelegramPlane];

  return (
    <section className="bg-gray-900 text-white p-5 sm:p-10 lg:py-20 lg:px-60">
      <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-around">
        <h1 className="w-full text-center text-2xl font-semibold mb-5 lg:m-0 lg:w-fit">
          WhiteCo<span className="text-red-300">ll</span>ar
        </h1>

        <div className="grid grid-cols-4 gap-2 sm:flex sm:gap-10 justify-items-center">
          <div className="flex gap-2 col-span-2 sm:items-center">
            <span className="bg-gray-500 lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center">
              <IoCall size={25} className="text-red-300" />
            </span>
            <div>
              <h2>Call Us</h2>
              <span>+01569896654</span>
            </div>
          </div>

          <div className="flex gap-2 col-span-2 sm:items-center">
            <span className="bg-gray-500 lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center">
              <MdEmail size={25} className="text-red-300" />
            </span>
            <div>
              <h2>Mail Us</h2>
              <span>info@Example.com</span>
            </div>
          </div>

          <div className="flex gap-2 col-span-4 sm:items-center">
            <span className="bg-gray-500 lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center">
              <FaLocationDot size={25} className="text-red-300" />
            </span>
            <div>
              <h2>Location</h2>
              <span>Amisterdam, 109-74</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5 sm:my-10" />

      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-6 sm:justify-items-center lg:flex lg:flex-row lg:gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:col-span-2 sm:justify-items-center lg:flex-1"
          >
            <h1 className="text-start w-full">{item.title}</h1>
            <ul className="flex flex-wrap gap-4 justify-center sm:flex-col">
              {item.links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="underline text-center">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-gray-400 w-fit text-center mx-auto flex flex-col gap-4 p-5 sm:col-span-6 sm:mt-5">
          <h1>Subscribe</h1>
          <p>Join Our Mailing List & To Get Our News</p>
          <div className="flex flex-col items-center justify-center gap-5">
            <input
              type="text"
              placeholder="Your Email Address"
              className="outline-none p-2 bg-white placeholder:text-gray-600"
            />
            <Button href="#" text="Subscribe" />
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="flex flex-col gap-2 lg:flex-row lg:justify-around lg:items-center">
        <div className="flex gap-2 justify-center">
          <h1 className="text-blue-600">Follow :</h1>
          <ul className="flex gap-2 items-center">
            {icons.map((Icon, index) => (
              <li key={index}>
                <Link href="#" className="text-blue-600">
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center">
          Copyright @ <span className="text-red-300">WhiteCollar</span> |
          Designed By <span className="text-amber-700">Eng.Ahmed Jheer</span> -
          Powered By Webflow
        </p>
      </div>
    </section>
  );
}
