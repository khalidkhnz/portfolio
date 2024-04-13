"use server";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import Scene1 from "@/components/FollowingBall/Scene1";
import PreloaderProvider from "./PreloaderProvider";

export default async function Home() {
  return (
    <div>
      <PreloaderProvider />
      <BoxMeshOptimized />
      <Scene1 />
      <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    </div>
  );
}
