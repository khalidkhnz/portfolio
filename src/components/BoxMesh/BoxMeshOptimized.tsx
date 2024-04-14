"use client";
import { cn } from "@/shared/utils";
import styles from "./mesh.module.scss";
import { useState, useEffect } from "react";

export default function Home({ children, sx, blockSx, blockColor }: any) {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    // @ts-nocheck
    // @ts-ignore
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          className={cn(blockSx)}
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el: any) => {
    el.style.backgroundColor = blockColor || "#f4f0ea";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  {
    /* bg-gradient-to-r from-purple-500 to-pink-500 h-screen */
  }
  return (
    <div className={`${styles.container} ${cn("bg-black", sx)}`}>
      <div className={`${styles.body}`}>{children}</div>
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          // @ts-nocheck
          // @ts-ignore
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </div>
  );
}
