'use client';

import { useEffect, useRef, useState } from "react";

export const Circle = ({
  value,
  title,
  description,
  paragraph,
  bgCard,
}: {
  value: number;
  title: string;
  description: string;
  paragraph?: string;
  bgCard?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  // IntersectionObserver لتشغيل التقدم عند ظهور العنصر
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  // زيادة progress تدريجيًا
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [started, value]);

  return (
    <div
      className={`${bgCard ? bgCard : "bg-gray-800"} p-5 rounded  flex flex-col justify-center gap-3`}
    >
      <div className="flex items-center gap-3">
        <div
          className="circleStyle w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(from -360deg, #FCA5A5 ${progress * 3.6}deg, #e5e7eb 0deg)`,
          }}
        >
          <div
            ref={ref}
            className="w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center"
          >
            {progress}%
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm">{title}</h3>
          <h1 className="font-semibold">{description}</h1>
        </div>
      </div>

      {paragraph && (
        <p className="text-xs text-center">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default Circle;
