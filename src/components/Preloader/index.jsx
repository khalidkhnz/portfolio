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
      index == 70 ? 1500 : index == 36 ? 1000 : 50
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={`bg-[#242424] ${styles.introduction}`}
    >
      <BoxMeshOptimized sx={"bg-orange-100"} blockColor={"orange"}>
        <div>
          {dimension.width > 0 && (
            <>
              <motion.p
                className="absolute z-[1] text-white bottom-[40px] right-[40px] text-6xl"
                variants={opacity}
                initial="initial"
                animate="enter"
              >
                <span></span>
                {words[index]}
              </motion.p>
              <svg>
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                  // className={`fill-[#242424]`}
                ></motion.path>
              </svg>
            </>
          )}
        </div>
      </BoxMeshOptimized>
      <GradientCursor isActive={false} />
      <FuzzyOverlay alt />
    </motion.div>
  );
}
