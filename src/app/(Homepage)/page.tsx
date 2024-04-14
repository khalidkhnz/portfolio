"use server";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import PreloaderProvider from "./PreloaderProvider";
import FuzzyScreen from "@/components/FuzzyScreen/FuzzyScreen";
import HorizontalScroll, {
  HorizontalScrollCarousel,
} from "@/components/HorizontalScroll/HorizontalScroll";
import NavActiveBlurProvider from "@/Providers/NavActiveBlurProvider";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  return (
    <div>
      <PreloaderProvider />
      <NavActiveBlurProvider>
        <FuzzyScreen>
          <BoxMeshOptimized>
            <div className="border-[2px] h-screen w-screen flex flex-col justify-center items-center">
              <p className="text-white text-[8vw] uppercase">
                Mohd Khalid Khan
              </p>
              <span className="text-white text-[30px]">Full Stack</span>
              <span className="text-white text-[30px]">Developer</span>
              <span className="text-white text-[30px]">Based in India</span>
            </div>
          </BoxMeshOptimized>
        </FuzzyScreen>

        <FuzzyScreen alt>
          <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        </FuzzyScreen>

        <HorizontalScroll />

        <Footer />
      </NavActiveBlurProvider>
    </div>
  );
}
