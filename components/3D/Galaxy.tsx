import { Box } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "../Galaxy.module.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//import dynamic from 'next/dynamic';
//const { OrbitControls } = dynamic(() => import('three/examples/jsm/controls/OrbitControls'));

const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images";

const scene = new THREE.Scene();

let isFirstRendering = true;


const Galaxy = () => {
  console.log("Galaxy");

  const [cameraPosition, setCameraPosition] = useState({
    x: -3,
    y: 0,
    z: 30,
  });

  useEffect(() => {
    if (isFirstRendering) {
      // setup
      let aspect_ratio = window.innerWidth / window.innerHeight;
      const htmlElementCanvas = document.querySelector("#bg");

      let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
      let renderer: THREE.WebGL1Renderer = new THREE.WebGL1Renderer();

      camera = new THREE.PerspectiveCamera(75, aspect_ratio, 0.1, 1000);
      camera.position.setZ(cameraPosition.z);
      if (
        htmlElementCanvas !== null &&
        htmlElementCanvas instanceof HTMLCanvasElement
      ) {
        renderer = new THREE.WebGL1Renderer({
          canvas: htmlElementCanvas,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffff00,
        });
        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        const lightHelper = new THREE.PointLightHelper(pointLight);
        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(lightHelper, gridHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        renderer.render(scene, camera);

        const animate = () => {
          requestAnimationFrame(animate);

          torus.rotation.x += 0.01;
          torus.rotation.y += 0.005;
          torus.rotation.z += 0.01;

          moon.rotation.x += 0.005;

          renderer.render(scene, camera);
        };

        const addStar = () => {
          const geometry = new THREE.SphereGeometry(0.25, 24, 24);
          const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
          const star = new THREE.Mesh(geometry, material);
          
          const x = THREE.MathUtils.randFloatSpread(100);
          const y = THREE.MathUtils.randFloatSpread(100);
          const z = THREE.MathUtils.randFloatSpread(100);

          // console.log(x,y,z)

          star.position.set(x, y, z);
          scene.add(star);
        };

        for (let index = 0; index < 200; index++) {
          addStar();
          
        }

        const spaceTexture = new THREE.TextureLoader().load(prefix + '/space.jpg');
        scene.background = spaceTexture;

        // Avatar

        const texture = new THREE.TextureLoader().load(prefix + '/photo.jpg');

        const photo = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: texture }));

        scene.add(photo);

        // Moon

        const moonTexture = new THREE.TextureLoader().load(prefix+'/moon.jpg');
        const normalTexture = new THREE.TextureLoader().load(prefix+'/normal.jpg');

        const moon = new THREE.Mesh(
          new THREE.SphereGeometry(3, 32, 32),
          new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture,
          })
        );

        scene.add(moon);

        moon.position.z = 30;
        moon.position.setX(-10);

        photo.position.z = -5;
        photo.position.x = 2;



        animate();
      } else {
        throw new Error("Error, no existe el elemento canvas");
      }

      isFirstRendering = false;
    }
  }, [cameraPosition]);

  return (
    <Box>
      <canvas id="bg"></canvas>
    </Box>
  );
};

export default Galaxy;
