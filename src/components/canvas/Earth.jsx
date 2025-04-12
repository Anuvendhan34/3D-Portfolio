import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const models = [
  { name: "Astronaut", path: "/model/astraia.glb", scale: 1, position: [0, 0.4, 0], rotation: [0, Math.PI / 2, 0] },
];

const ModelViewer = ({ modelPath, scale, position, rotation }) => {
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (!scene) return;

    // Remove background objects if they exist
    scene.traverse((child) => {
      if (child.name.toLowerCase().includes("background") || child.isLight) {
        child.visible = false; 
      }
    });

    // Apply correct rotation
    scene.rotation.set(...rotation);

    // Play and loop animations
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
        action.setEffectiveTimeScale(1);
        action.loop = THREE.LoopRepeat;
      });
    }
  }, [scene, actions, rotation]);

  return (
    <group scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
};

const ModelSwiper = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1.5, 3], fov: 40 }}
        gl={{ preserveDrawingBuffer: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Environment preset="studio" background={false} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
          />
          
          {/* Lighting */}
          <ambientLight intensity={2.0} color="#ffffff" />
          <hemisphereLight intensity={1.5} groundColor="#404040" color="#ffffff" />
          <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
          <spotLight position={[0, 10, 10]} angle={0.3} penumbra={1} intensity={2.5} castShadow />
          <pointLight intensity={2.5} position={[5, 5, 5]} />

          <ModelViewer
            modelPath={models[0].path}
            scale={models[0].scale}
            position={models[0].position}
            rotation={models[0].rotation}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ModelSwiper;