import BoxMesh from "@/components/BoxMesh/BoxMesh";
import BoxMeshOptimized from "@/components/BoxMesh/BoxMeshOptimized";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <BoxMesh /> */}
      <BoxMeshOptimized />
      <div className="h-screen bg-black"></div>
    </main>
  );
}
