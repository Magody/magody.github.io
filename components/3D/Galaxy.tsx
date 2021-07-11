import { Box, position } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import styles from "../Galaxy.module.css";
import * as THREE from "three";
import { ThreeWorld } from "../../models/ThreeWorld";

const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images";

const threeWorldGalaxy = new ThreeWorld();

let INTERSECTED: any;

const pointer = new THREE.Vector2();

const Galaxy = () => {
  console.log("Galaxy");

  const [cameraPosition, setCameraPosition] = useState({
    x: 0,
    y: 30,
    z: 10,
  });

  useEffect(() => {
    setupGalaxy(window.innerWidth, window.innerHeight / 2); // window.innerHeight
    threeWorldGalaxy.camera.position.setZ(30);
  }, []);

  return (
    <Box>
      <canvas id="bg"></canvas>
    </Box>
  );
};

const setupGalaxy = (width: number, height: number) => {
  // setup
  let aspect_ratio = window.innerWidth / window.innerHeight;
  const htmlElementCanvas = document.querySelector("#bg");
  if (
    htmlElementCanvas !== null &&
    htmlElementCanvas instanceof HTMLCanvasElement
  ) {
    const renderer = new THREE.WebGL1Renderer({
      canvas: htmlElementCanvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    threeWorldGalaxy.init(
      new THREE.Scene(),
      new THREE.PerspectiveCamera(75, aspect_ratio, 0.1, 1000),
      renderer,
      true
    );
    const torus = threeWorldGalaxy.addTorus(15, 3, 5, 100, 0x29a680, {
      x: 0,
      y: 20,
      z: -30,
    });
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    threeWorldGalaxy.scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    threeWorldGalaxy.scene.add(lightHelper, gridHelper);

    for (let index = 0; index < 200; index++) {
      threeWorldGalaxy.addStar();
    }

    const spaceTexture = new THREE.TextureLoader().load(prefix + "/space.jpg");
    threeWorldGalaxy.scene.background = spaceTexture;

    // Avatar

    const texture = new THREE.TextureLoader().load(prefix + "/photo.jpg");

    const photo = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: texture })
    );
    photo.position.x = 10;
    photo.position.y = 10;
    threeWorldGalaxy.scene.add(photo);

    // Moon
    const moonTexture = new THREE.TextureLoader().load(prefix + "/moon.jpg");
    const normalTexture = new THREE.TextureLoader().load(
      prefix + "/normal.jpg"
    );
    const moon = threeWorldGalaxy.addMoon(moonTexture, normalTexture, {
      x: -10,
      y: 10,
      z: 20,
    });

    const onPointerMove = ( event: { clientX: number; clientY: number; } ) => {

      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


      
    }

    const onPointerDown = ( event: { clientX: number; clientY: number; } ) => {

      if (INTERSECTED && INTERSECTED.material.emissive !== undefined && INTERSECTED.type === "Mesh"){

        console.log("MOUSE DOWN", INTERSECTED)
        alert("UUID: " + INTERSECTED.uuid)
      }

      
    }

    document.addEventListener( 'mousemove', onPointerMove );
    document.addEventListener( 'mousedown', onPointerDown );

    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      photo.rotation.y -= 0.01;

      moon.rotation.x += 0.005;

      const intersects = threeWorldGalaxy.rayCastToPositionFromCamera(pointer);
      if (intersects != null && intersects.length > 0) {
        // console.log("intersec")
        if (INTERSECTED != intersects[0].object) {
          if (INTERSECTED && INTERSECTED.material.emissive !== undefined)
            INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

          INTERSECTED = intersects[0].object;
          if(INTERSECTED.material.emissive !== undefined){
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex(0xff0000);
          }
          
        }
      } else {
        if (INTERSECTED && INTERSECTED.material.emissive !== undefined)
          INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

        INTERSECTED = null;
      }
      threeWorldGalaxy.renderer.render(
        threeWorldGalaxy.scene,
        threeWorldGalaxy.camera
      );
    };

    // continuous animation
    animate();
  } else {
    throw new Error("Canvas element doesnt exist");
  }
};

export default Galaxy;
