"use client";
import React, { useEffect, useRef, useState } from "react";

export const ScrollOverlay = ({
  PrimaryBg,
  secondaryBg,
  children,
  sectionHight,
}: {
  PrimaryBg: string;
  secondaryBg: string;
  children: React.ReactNode;
  sectionHight: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [overlayY, setOverlayY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!started) return;
      setOverlayY((prev) => {
        if (prev >= sectionHight) return sectionHight;
        return prev + 1;
      });
    }, 5);

    return () => clearInterval(interval);
  }, [started]);
  return (
    <div
      ref={ref}
      className={`${PrimaryBg} absolute inset-0 z-10 backdrop-blur-2xl overflow-hidden`}
    >
      <div
        className={`${secondaryBg} absolute inset-0 z-20 backdrop-blur-2xl`}
        style={{ transform: `translateY(${overlayY}px)` }}
      ></div>
      {children}
    </div>
  );
};

export default ScrollOverlay;
