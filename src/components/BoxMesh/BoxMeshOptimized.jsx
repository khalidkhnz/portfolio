"use client";
import styles from "./mesh.module.scss";
import { useState, useEffect } from "react";

export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el) => {
    el.style.backgroundColor = "#f4f0ea";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <div
      className={`${styles.container} bg-gradient-to-r from-purple-500 to-pink-500 h-screen`}
    >
      {/* <div className={styles.body}>
        <p className="text-white">Mohd Khalid Khan</p>
      </div> */}
      <div className={styles.grid}>
        {windowsWidth > 0 &&
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
