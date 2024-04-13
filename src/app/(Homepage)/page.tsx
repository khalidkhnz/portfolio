"use server";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import Scene1 from "@/components/FollowingBall/Scene1";
import PreloaderProvider from "./PreloaderProvider";
import FuzzyScreen from "@/components/FuzzyScreen/FuzzyScreen";

export default async function Home() {
  return (
    <div>
      <PreloaderProvider />
      <FuzzyScreen>
        <BoxMeshOptimized />
      </FuzzyScreen>

      <Scene1 />

      <FuzzyScreen>
        <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      </FuzzyScreen>
    </div>
  );
}
