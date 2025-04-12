import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import leftImage from "../../assets/robo3.png";
import rightImage from "../../assets/bok 2.png";

const models = [
  { name: "Cyberpunk VR", path: "/model/michi_bot.glb", scale: 170, position: [0, -1, 0] },
];

const images = [
  { src: leftImage, alt: "Left decoration", position: "left-[3%] md:left-[5%]", top: "top-[48%] md:top-[50%]", size: "w-44 md:w-52 lg:w-60" },
  { src: rightImage, alt: "Right decoration", position: "right-[3%] md:right-[5%]", top: "top-[52%] md:top-[50%]", size: "w-44 md:w-52 lg:w-60" },
];

const ModelViewer = ({ modelPath, scale, position }) => {
  const { scene, materials, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, scene);
  const modelRef = useRef();

  useEffect(() => {
    if (!scene || !scene.children.length) return;
    if (modelRef.current) {
      modelRef.current.rotation.y = 0.1; // Rotate slightly left
    }
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.map === null) {
        console.warn(`Mesh "${child.name}" is missing texture, trying to fix...`);
        if (materials[child.material.name]) {
          child.material = materials[child.material.name];
        }
        child.material.needsUpdate = true;
      }
    });
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [scene, actions, materials]);

  return <primitive ref={modelRef} object={scene} scale={scale} position={position} />;
};

const ModelSwiper = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); } /* Higher jump */
          }
          @keyframes jump-opposite {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(30px); } /* Higher jump */
          }
          .jumping:nth-child(odd) { animation: jump 3.5s infinite ease-in-out; } /* Slower animation */
          .jumping:nth-child(even) { animation: jump-opposite 3.5s infinite ease-in-out; } /* Slower animation */
        `}
      </style>

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute ${image.position} ${image.top} transform -translate-y-1/2 z-10 jumping`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`${image.size} h-auto object-contain`}
            style={{ maxHeight: "320px" }}
          />
        </div>
      ))}
      <div className="w-full h-full">
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 2, 7], fov: 50 }}
          gl={{ preserveDrawingBuffer: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1.5} />
            <hemisphereLight intensity={1.2} groundColor="black" />
            <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
            <spotLight position={[0, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
            <pointLight intensity={2} position={[5, 5, 5]} />
            <Environment preset="city" background={false} />
            <ModelViewer
              modelPath={models[0].path}
              scale={models[0].scale}
              position={models[0].position}
            />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelSwiper;
