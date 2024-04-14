"use server";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import PreloaderProvider from "./PreloaderProvider";
import FuzzyScreen from "@/components/FuzzyScreen/FuzzyScreen";
import HorizontalScroll, {
  HorizontalScrollCarousel,
} from "@/components/HorizontalScroll/HorizontalScroll";

export default async function Home() {
  return (
    <div>
      <PreloaderProvider />
      <FuzzyScreen>
        <BoxMeshOptimized>
          <p className="text-white">Mohd Khalid Khan</p>
        </BoxMeshOptimized>
      </FuzzyScreen>

      <FuzzyScreen alt>
        <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      </FuzzyScreen>

      <HorizontalScroll />
    </div>
  );
}
