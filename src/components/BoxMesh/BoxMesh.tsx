"use client";
import { cn } from "@/shared/utils";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

function BoxMesh({}: Props) {
  return (
    <section className="h-screen w-[100%] bg-slate-950">
      <div className="h-[70vw] max-h-[100vh] overflow-hidden">
        <div className="grid grid-cols-16">
          {Array.from({
            length: 200,
          }).map((_, i) => {
            return <GridItem key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function GridItem({}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const div = divRef.current;

    if (div) {
      const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
          setIsHovered(false);
        }, 250);
      };

      const handleMouseLeave = () => {
        setTimeout(() => {
          setIsHovered(false);
        }, 250);
      };

      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        div.removeEventListener("mouseenter", handleMouseEnter);
        div.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        `${
          isHovered ? "bg-white" : "bg-pink-700"
        } aspect-square w-[100%] h-[100%]`
      )}
    ></div>
  );
}

export default BoxMesh;
