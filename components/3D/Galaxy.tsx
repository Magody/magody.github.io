import { Box, Flex, position } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Galaxy.module.css";
import * as THREE from "three";
import { ThreeWorld } from "../../models/ThreeWorld";
import useMediaQueryFixed from "../../hooks/use-media-query";
import $ from "jquery";

const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images";

const threeWorldGalaxy = new ThreeWorld();

let INTERSECTED: any;

const pointer = new THREE.Vector2();

const messages = [
  "Hey",
  "Whats going on?",
  "The space is enigmatic",
  "Why",
  "Its a good day, isn't it?",
  "Fermi was not wrong",
  "React is better than Angular",
  "This is an easter egg"
]

const Galaxy = () => {
  console.log("Galaxy");

  const [cameraPosition, setCameraPosition] = useState({
    x: 0,
    y: 30,
    z: 10,
  });


  const isSmallerScreen = useMediaQueryFixed("(max-width: 600px)");

  useEffect(() => {
    var viewportOffset = $("#box_galaxy")[0].getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    var left = viewportOffset.left + 3;

    const width = isSmallerScreen? window.innerWidth - left * 2 : window.innerWidth - left * 2;
    const height = isSmallerScreen? window.innerHeight/ 1.5: window.innerHeight/ 2;
    console.log("GALAXY", width, height, top, left)
    
    setupGalaxy(width, height, isSmallerScreen); // window.innerHeight
    threeWorldGalaxy.camera.position.setZ(50);
    threeWorldGalaxy.camera.position.setX(-20);
   
  }, []);

  return (
    <Box id="box_galaxy" className={styles.galaxy}>
      <canvas id="bg"></canvas>
    </Box>
  );
};

const setupGalaxy = (width: number, height: number, isSmallerScreen: boolean) => {
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
      new THREE.PerspectiveCamera( 45, width / height, 10, 1000 ),
      renderer,
      true
    );
    const torus = threeWorldGalaxy.addTorus(15, 3, 5, 100, 0x29a680, {
      x: 0,
      y: 20,
      z: -30,
    });

    const torus2 = threeWorldGalaxy.addTorus(20, 2, 5, 100, 0x52eb34, {
      x: 0,
      y: 20,
      z: -30,
    });

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.position.y = 30;
    threeWorldGalaxy.scene.add(pointLight, ambientLight);

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // threeWorldGalaxy.scene.add(lightHelper, gridHelper);

    for (let index = 0; index < 50; index++) {
      threeWorldGalaxy.addStar();
    }

    const spaceTexture = new THREE.TextureLoader().load(prefix + "/space.jpg");
    threeWorldGalaxy.scene.background = spaceTexture;

    // Avatar

    const texture = new THREE.TextureLoader().load(prefix + "/ia.jpg");

    const photo = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 15),
      new THREE.MeshBasicMaterial({ map: texture })
    );
    photo.position.x = 0;
    photo.position.y = 0;
    threeWorldGalaxy.scene.add(photo);

    // Moon
    const moonTexture = new THREE.TextureLoader().load(prefix + "/moon.jpg");
    const normalTexture = new THREE.TextureLoader().load(
      prefix + "/normal_map.jpg"
    );
    const moon = threeWorldGalaxy.addMoon(moonTexture, normalTexture, {
      x: -10,
      y: 10,
      z: 20,
    });

    const moon2 = threeWorldGalaxy.addMoon(moonTexture, normalTexture, {
      x: -30,
      y: 10,
      z: -30,
    });

    const moon3 = threeWorldGalaxy.addMoon(moonTexture, normalTexture, {
      x: 30,
      y: 10,
      z: -30,
    });

    const onPointerMove = ( event: { clientX: number; clientY: number; } ) => {

      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


      
    }

    const onPointerDown = ( event: { clientX: number; clientY: number; } ) => {

      if (INTERSECTED && INTERSECTED.material.emissive !== undefined && INTERSECTED.type === "Mesh"){

        console.log("MOUSE DOWN", INTERSECTED)
        const random_index = Math.floor(Math.random() * (messages.length-0.5));
        alert(messages[random_index]) // INTERSECTED.uuid
      }

      
    }

    const onWindowResize = ()=>{

      threeWorldGalaxy.camera.aspect = window.innerWidth / window.innerHeight;
      threeWorldGalaxy.camera.updateProjectionMatrix();

      if($("#box_galaxy")[0] !== undefined){
        var viewportOffset = $("#box_galaxy")[0].getBoundingClientRect();
        // these are relative to the viewport, i.e. the window
        var top = viewportOffset.top;
        var left = viewportOffset.left + 3;
        const width = isSmallerScreen? window.innerWidth - left * 2 : window.innerWidth - left * 2;
       const height = isSmallerScreen? window.innerHeight/ 1.5: window.innerHeight/ 2;
  
    
        threeWorldGalaxy.renderer.setSize( width, height );
      }

      
  
    }
    window.addEventListener( 'resize', onWindowResize, false );
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
