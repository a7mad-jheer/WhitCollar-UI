import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RiPagesFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { RiBloggerFill } from "react-icons/ri";
import { FcBusinessContact } from "react-icons/fc";
import { SiGooglesearchconsole } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const NAV_LINK = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "About Us", href: "/aboutUs", icon: <FcAbout /> },
  {
    label: "Pages",
    href: "",
    icon: <RiPagesFill />,
    subMenu: [
      { label: "life Style", href: "lifeStyle" },
      { label: "our Team", href: "ourTeam" },
      { label: "contact Us", href: "contactUs" },
    ],
  },
  { label: "Services", href: "/services", icon: <GrServices /> },
  { label: "Blog", href: "/Licencing", icon: <RiBloggerFill /> },
  { label: "Contact Us", href: "/contactUs", icon: <FcBusinessContact /> },
  {
    label: "Get Consulting",
    href: "/getConsulting",
    icon: <SiGooglesearchconsole />,
  },
];

export default function Links({
  className,
  liStyle,
}: {
  className?: string;
  liStyle?: string;
}) {
  const toogleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  return (
    <div>
      <ul className={` ${className || ""}`}>
        {NAV_LINK.map((link) => {
          return (
            <li
              className={`${liStyle} ${
                link.label === "pages" ? "relative" : ""
              }  text-[18px] `}
              key={link.label}
            >
              <Link  href={link.href}>
                <div
                  className="flex items-center gap-1 "
                  onClick={() => link.subMenu && toogleSubMenu(link.label)}
                >
                <span> {link.icon}</span>
                  <span className="text-gray-800">{link.label}</span>
                  {link.subMenu && (
                    <IoMdArrowDropdown
                      className={`ml-1 transition-transform duration-200 ${
                        openSubMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
              </Link>

              {link.subMenu && openSubMenu === link.label && (
                <div className="relative">
                  <ul className="absolute top-0 left-0 bg-white shadow-lg rounded mt-1 w-40 z-50">
                    {link.subMenu.map((sub) => {
                      return (
                        <li
                          key={sub.label}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          <Link href={sub.href}>{sub.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
