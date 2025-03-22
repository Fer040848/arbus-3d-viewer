
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF, ContactShadows, Html } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, Vector3 } from 'three';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function Model({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: { 
  path: string; 
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  
  // Animate model on hover
  useFrame((state) => {
    if (!group.current) return;
    
    // Subtle floating animation
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.5) * 0.05;
    
    // Rotate slightly faster when hovered
    const rotationSpeed = hovered ? 0.003 : 0.001;
    group.current.rotation.y += rotationSpeed;
  });

  return (
    <group 
      ref={group} 
      dispose={null} 
      position={new Vector3(...position)}
      rotation={[rotation[0], rotation[1], rotation[2]]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* This is a simplified structure as we can't know the exact structure of the user's models */}
      {/* The real model will replace this cube */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "#888" : "#666"} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function CameraController() {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return <OrbitControls 
    enableDamping={true} 
    dampingFactor={0.05} 
    rotateSpeed={0.5}
    minDistance={3}
    maxDistance={10}
    target={[0, 0, 0]}
    enableZoom={true}
    enablePan={false}
    args={[camera, gl.domElement]}
  />;
}

// Helper component to show instructions
function Instructions() {
  return (
    <Html position={[0, -2, 0]} center>
      <div className="px-4 py-2 glass-panel rounded-full text-xs text-gray-700 animate-fade-in opacity-80">
        Click and drag to rotate • Scroll to zoom
      </div>
    </Html>
  );
}

export default function ModelViewer({ 
  modelPath = "/models/macbook.glb", 
  backgroundColor = "#f5f5f7",
  showInstructions = true,
  height = "70vh"
}: {
  modelPath?: string;
  backgroundColor?: string;
  showInstructions?: boolean;
  height?: string;
}) {
  return (
    <div className="w-full relative" style={{ height }}>
      <div className="absolute inset-0 canvas-container" style={{ background: backgroundColor }}>
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <CameraController />
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              castShadow 
              shadow-mapSize-width={1024} 
              shadow-mapSize-height={1024}
            />
            <Model path={modelPath} />
            <ContactShadows
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, -1.5, 0]}
              opacity={0.5}
              width={10}
              height={10}
              blur={1}
              far={1.5}
            />
            <Environment preset="city" />
            {showInstructions && <Instructions />}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

// Loading spinner component for Suspense fallback
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary/60" />
        <p className="mt-2 text-sm text-muted-foreground">Loading model...</p>
      </div>
    </Html>
  );
}

// Preload the default model to avoid flickering
useGLTF.preload('/models/macbook.glb');
