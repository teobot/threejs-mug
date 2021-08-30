import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

function Box() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [15, 15, 15],
  }));

  return (
    <mesh ref={ref} onClick={() => {
      api.velocity.set(0, 5, 0);
    }}>
      <boxBufferGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

export default function TestCanvas({ canvasSize }) {
  return (
    <Canvas
      style={{
        height: canvasSize / 2,
        width: canvasSize,
      }}
    >
      <OrbitControls />
      <Stars />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}
