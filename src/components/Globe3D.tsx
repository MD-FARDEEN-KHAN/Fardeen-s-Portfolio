import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= 0.002;
    }
  });

  return (
    <>
      {/* Main sphere with distortion */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#00bfff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Wireframe overlay */}
      <Sphere ref={wireframeRef} args={[1.52, 32, 32]}>
        <meshBasicMaterial
          color="#ffd700"
          wireframe
          transparent
          opacity={0.2}
        />
      </Sphere>
    </>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas camera={{ position: [0, 0, 4] }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffd700" />
        <RotatingGlobe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default Globe3D;
