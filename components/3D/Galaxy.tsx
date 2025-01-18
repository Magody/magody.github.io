import React, { useEffect } from "react";
import * as THREE from "three";
import { ThreeWorld } from "@/models/ThreeWorld";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const threeWorldGalaxy = new ThreeWorld();
const pointer = new THREE.Vector2();
let textures: { spaceTexture: THREE.Texture; moonTexture: THREE.Texture; normalTexture: THREE.Texture };

const Galaxy = () => {
  useEffect(() => {
    const canvas = document.querySelector("#bg") as HTMLCanvasElement;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.9, window.innerHeight / 2);

    threeWorldGalaxy.init(
      new THREE.Scene(),
      new THREE.PerspectiveCamera(50, (window.innerWidth * 0.9) / (window.innerHeight / 2), 0.1, 500),
      renderer,
      true
    );

    // Preload textures
    if (!textures) {
      const textureLoader = new THREE.TextureLoader();
      textures = {
        spaceTexture: textureLoader.load(`${prefix}/images/space.jpg`),
        moonTexture: textureLoader.load(`${prefix}/images/moon.jpg`),
        normalTexture: textureLoader.load(`${prefix}/images/normal_map.jpg`),
      };
    }

    threeWorldGalaxy.scene.background = textures.spaceTexture;

    const moonPositions = [{ x: 0, y: 0, z: 0 }];
    const moons: THREE.Mesh[] = moonPositions.map((position) =>
      threeWorldGalaxy.addMoon(textures.moonTexture, textures.normalTexture, position)
    );

    threeWorldGalaxy.camera.position.set(0, 0, 10);
    threeWorldGalaxy.camera.lookAt(0, 10, -30);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    threeWorldGalaxy.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(0, 15, -15);
    threeWorldGalaxy.scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      moons.forEach((moon) => {
        moon.rotation.x += 0.001;
        moon.rotation.y -= 0.001;
      });

      if (threeWorldGalaxy.controls) threeWorldGalaxy.controls.update();
      renderer.render(threeWorldGalaxy.scene, threeWorldGalaxy.camera);
    };

    animate();

    // Debounced resize handler
    /*
    const resizeHandler = debounce(() => {
      const width = window.innerWidth * 0.9;
      const height = window.innerHeight / 2;
      threeWorldGalaxy.camera.aspect = width / height;
      threeWorldGalaxy.camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }, 100);

    window.addEventListener("resize", resizeHandler);
    */

    // Cleanup
    return () => {
      // window.removeEventListener("resize", resizeHandler);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      threeWorldGalaxy.cleanup();

      // Dispose textures to free memory
      textures.spaceTexture.dispose();
      textures.moonTexture.dispose();
      textures.normalTexture.dispose();
    };
  }, []);

  return (
    <div style={{ width: "90%", margin: "0 auto", overflow: "hidden" }}>
      <canvas id="bg" style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
};

export default Galaxy;
