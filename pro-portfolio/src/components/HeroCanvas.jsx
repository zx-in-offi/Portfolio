import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere visible args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.4} speed={2} />
        </Sphere>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
