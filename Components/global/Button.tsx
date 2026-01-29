import Link from "next/link";
import React from "react";

export const Button = ({
  text,
  href,
  icon,
  className,
}: {
  text: string;
  href: string;
  icon?: React.ReactElement;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`bg-red-300 py-3 px-6 rounded text-white hover:bg-red-400 duration-150 w-fit flex items-center gap-2 ${
        className || ""
      }`}
    >
      <h1>{text}</h1>
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default Button;
