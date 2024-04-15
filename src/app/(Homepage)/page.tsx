"use server";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import PreloaderProvider from "./PreloaderProvider";
import FuzzyScreen from "@/components/FuzzyScreen/FuzzyScreen";
import HorizontalScroll, {
  HorizontalScrollCarousel,
} from "@/components/HorizontalScroll/HorizontalScroll";
import NavActiveBlurProvider from "@/Providers/NavActiveBlurProvider";
import Footer from "@/components/Footer/Footer";
import Greets from "./Greets";
import module from "../variables.module.scss";

export default async function Home() {
  return (
    <>
      <div className="relative">
        <PreloaderProvider />
        <NavActiveBlurProvider>
          <FuzzyScreen>
            <BoxMeshOptimized>
              <div className="border-[2px] h-screen w-screen flex flex-col justify-center items-center gap-2">
                <p
                  className={`${module.font2} text-white md:text-[30px] grayscale`}
                >
                  <Greets />
                </p>
                <p
                  className={`${module.font2} text-white text-[6vw] capitalize`}
                >
                  <span className={`${module.font1} text-[8vw]`}>M</span>
                  ohd <span className={`${module.font1} text-[8vw]`}>K</span>
                  halid <span className={`${module.font1} text-[8vw]`}>K</span>
                  han
                </p>
                <span
                  className={`${module.font1} text-white text-[30px] md:text-[60px] grayscale`}
                >
                  🦇 Full Stack Developer 🦇
                </span>
              </div>
            </BoxMeshOptimized>
          </FuzzyScreen>

          <div className="relative">
            {/* <FuzzyScreen disabled> */}
            <BoxMeshOptimized
              // sx={"bg-gradient-to-r from-sky-500 to-indigo-500"}
              // blockSx={"bg-red-950 border-[3px] border-red-950"}
              blockColor={"#242424"}
            >
              <div className=" h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className=" w-screen text-white text-[100px]">
                  section 2
                </div>
              </div>
            </BoxMeshOptimized>
            {/* </FuzzyScreen> */}
          </div>

          <HorizontalScroll />

          <Footer />
        </NavActiveBlurProvider>
      </div>
    </>
  );
}
