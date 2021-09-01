
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

import Mug from "../3d files/CustomTextureMug/Mug"

import img from "../img/cat.png"

function Box() {
    const texture = useTexture(img)

    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" map={texture} />
        </mesh>
    );
}

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

                <Mug/>
            </Canvas>
        </Suspense>
    );
}
