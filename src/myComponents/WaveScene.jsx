// src/components/WaveScene.js
import { useRef, useEffect } from "react";
import * as THREE from "three";

const WaveScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Basic setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mountRef.current.appendChild(renderer.domElement);

    // Create geometry with texture
    let geometry = new THREE.PlaneGeometry(30, 15, 10, 10);
    if (window.innerWidth >= 640) {
      geometry = new THREE.PlaneGeometry(30, 20, 10, 10);
    }
    const texture = new THREE.TextureLoader().load(
      "/imgs/Ola2.png",
      (texture) => {
        texture.encoding = THREE.sRGBEncoding; // Ensures correct color encoding
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      }
    );
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BoxGeometry,
      transparent: true,
    });
    let plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Position camera
    camera.position.z = 12; //queda bien con 12 en ola1

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Update vertex positions
      const positionAttribute = plane.geometry.attributes.position;
      const time = Date.now() * 0.001;
      for (let i = 0; i < positionAttribute.count; i++) {
        const y = positionAttribute.getY(i);
        positionAttribute.setZ(i, Math.sin(y * 2 + time) * 0.5);
      }
      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    // const onWindowResize = () => {
    //   const newAspectRatio = window.innerWidth / window.innerHeight;
    //   plane.geometry.dispose();
    //   plane.geometry = new THREE.PlaneGeometry(newAspectRatio * 10, 20, 32, 32);
    //   camera.aspect = newAspectRatio;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // };
    // window.addEventListener("resize", onWindowResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-[0] left-[0] w-[100%] h-[100%] z-[-1] flex justify-center "
    />
  );
};

export default WaveScene;
