"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import FuzzyScreen, {
  FuzzyOverlay,
} from "@/components/FuzzyScreen/FuzzyScreen";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import GradientCursor from "@/components/FollowingBall/GradientCursor";

const words = [
  "1%",
  "2%",
  "3%",
  "4%",
  "5%",
  "6%",
  "7%",
  "8%",
  "9%",
  "10%",
  "11%",
  "12%",
  "13%",
  "14%",
  "15%",
  "16%",
  "17%",
  "18%",
  "19%",
  "20%",
  "21%",
  "22%",
  "23%",
  "24%",
  "25%",
  "26%",
  "27%",
  "28%",
  "29%",
  "30%",
  "31%",
  "32%",
  "33%",
  "34%",
  "35%",
  "36%",
  "37%",
  "38%",
  "39%",
  "40%",
  "41%",
  "42%",
  "43%",
  "44%",
  "45%",
  "46%",
  "47%",
  "48%",
  "49%",
  "50%",
  "51%",
  "52%",
  "53%",
  "54%",
  "55%",
  "56%",
  "57%",
  "58%",
  "59%",
  "60%",
  "61%",
  "62%",
  "63%",
  "64%",
  "65%",
  "66%",
  "67%",
  "68%",
  "69%",
  "70%",
  "71%",
  "72%",
  "73%",
  "74%",
  "75%",
  "76%",
  "77%",
  "78%",
  "79%",
  "80%",
  "81%",
  "82%",
  "83%",
  "84%",
  "85%",
  "86%",
  "87%",
  "88%",
  "89%",
  "90%",
  "91%",
  "92%",
  "93%",
  "94%",
  "95%",
  "96%",
  "97%",
  "98%",
  "99%",
  "100%",
];

export default function Index() {
  // const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 70 ? 100 : index == 36 ? 200 : 40
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={`relative bg-[#242424] ${styles.introduction}`}
    >
      <BoxMeshOptimized
        blockSx={"border-black border-[1px] bg-black"}
        sx={"bg-[#242424]"}
        blockColor={"orange"}
      >
        <div className="">
          <div className="absolute top-0 right-0 h-screen w-screen">
            {/* <h1 className="text-red-50">Hello Stranger</h1> */}
          </div>
          {dimension.width > 0 && (
            <>
              <motion.p
                className="absolute z-[1] text-red-50 bottom-[40px] right-[40px] text-[50px] md:text-[100px]"
                variants={opacity}
                initial="initial"
                animate="enter"
              >
                {words[index]}
              </motion.p>
            </>
          )}
        </div>
      </BoxMeshOptimized>
      {/* <GradientCursor isActive={isActive} /> */}
      <FuzzyOverlay alt />
    </motion.div>
  );
}
