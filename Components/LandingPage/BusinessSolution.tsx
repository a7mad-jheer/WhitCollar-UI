"use client";
import Link from "next/link";

import { HiHomeModern } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { HeroTitle } from "../global/GlobalWrapper";

const items = [
  {
    id: 0,
    title: "Financial Vonsulatancy",
    icon: <HiHomeModern size={30} className="text-white" />,
    read: "Read More",
  },
  {
    id: 1,
    title: "Business Management",
    icon: <HiHomeModern size={30} className="text-white" />,
    read: "Read More",
  },
  {
    id: 2,
    title: "Consultans & Program",
    icon: <HiHomeModern size={30} className="text-white" />,
    read: "Read More",
  },
  {
    id: 3,
    title: "Company Management",
    icon: <HiHomeModern size={30} className="text-white" />,
    read: "Read More",
  },
  {
    id: 4,
    title: "Financial & Insurance Jobs",
    icon: <HiHomeModern size={30} className="text-white" />,
    read: "Read More",
  },
];

const finalValue = 0;

export default function BusinessSolution() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    if (started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          console.log("finded");
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= finalValue) {
          clearInterval(interval);
          return finalValue;
        } else {
          return prev - 0.2;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [started]);
  return (
    <div
      style={{ filter: `blur(${progress}px)` }}
      ref={ref}
      className={`flex items-center justify-center bg-gray-900  px-10 py-30`}
    >
      <div className="max-w-4/5 flex flex-col justify-center ">
        <div className="w-full flex flex-col items-center justify-center text-center mb-10 text-white ">
          <HeroTitle
            title="We Are Ecpertise in"
            description="We Are Provide Professional Business Solutions."
          />
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3 my-4 ">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <div className="w-2xs h-30 bg-gray-200 py-5 px-3 rounded-2xl">
                  <div className="flex  justify-between gap-2">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                    <div className="bg-red-300 w-10 h-10 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <Link
                    className="text-blue-800 cursor-pointer underline"
                    href="#"
                  >
                    {item.read}
                  </Link>
                </div>
              </div>
            );
          })}

          <div className="w-2xs h-30 bg-red-300 p-5 rounded-2xl flex items-center justify-center text-white text-2xl">
            <Link href="#">More Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
