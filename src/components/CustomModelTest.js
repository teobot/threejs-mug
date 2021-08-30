import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";

import Mug from "../3d files/Mug2/Mug";

export default function CustomModelTest({ canvasSize }) {
  const cameraPositionDistance = 35;

  return (
    <Canvas
      camera={{
        position: [cameraPositionDistance / 4, cameraPositionDistance / 4, cameraPositionDistance / 4],
        far: cameraPositionDistance,
        near: 0.1,
      }}
      style={{
        height: canvasSize / 2,
        width: canvasSize,
      }}
    >
      <OrbitControls enablePan={false} />

      <hemisphereLight groundColor={0x000000} intensity={1} />

      <Mug position={[0, -4, 0]} />
    </Canvas>
  );
}
