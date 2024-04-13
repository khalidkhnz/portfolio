"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.header} fixed top-0 z-50 text-white`}>
      <div className="absolute w-screen h-full top-0 left-0  bg-[#0a0a09] opacity-30"></div>

      <div className={styles.bar}>
        <Link href="/">Khalid</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={`${styles.shopContainer} gap-[1.5vw]`}
        >
          <p>SHOP</p>
          <p>BLOG</p>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
