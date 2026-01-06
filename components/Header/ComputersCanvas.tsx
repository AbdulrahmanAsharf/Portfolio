"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

/* ================= TYPES ================= */

interface ComputersProps {
  isMobile: boolean;
}

/* ================= MODEL ================= */

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("/3D/programmer_desktop_3d_pc.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0, 0, 0]}
      />
    </mesh>
  );
};

/* ================= CANVAS ================= */

const ComputersCanvas: React.FC = () => {
  // 👈 نحدد القيمة الابتدائية مرة واحدة
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 500px)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 20], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
       <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <directionalLight position={[-5, 5, 5]} intensity={1} />
    <pointLight position={[0, 5, 0]} intensity={1} />
    <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
