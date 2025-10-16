import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Sphere args={[1, 100, 100]} scale={2}>
            <MeshDistortMaterial
              color="#00bfff"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.4}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
