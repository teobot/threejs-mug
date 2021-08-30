import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Mug from "../3d files/Mug2/Mug";

export default function CustomModelTest({ canvasSize }) {
  const cameraPositionDistance = 35;

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Canvas
        camera={{
          position: [
            cameraPositionDistance / 4,
            cameraPositionDistance / 4,
            cameraPositionDistance / 4,
          ],
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
    </Suspense>
  );
}
