import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Position } from "./Position.interface";

export class ThreeWorld {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGL1Renderer;
  raycaster!: THREE.Raycaster;

  constructor() {}

  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGL1Renderer,
    showControls: boolean = false
  ) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.renderer.render(this.scene, this.camera);
    if (showControls) {
      const controls = new OrbitControls(camera, renderer.domElement);
    }
    this.raycaster = new THREE.Raycaster();
  }

  addTorus(
    radius: number,
    tube: number,
    radialSegments: number,
    tubularSegments: number,
    color: number,
    position: Position
  ): THREE.Mesh {
    const geometry = new THREE.TorusGeometry(
      radius,
      tube,
      radialSegments,
      tubularSegments
    );
    const material = new THREE.MeshLambertMaterial({
      color: color,
    });
    const torus = new THREE.Mesh(geometry, material);
    const { x, y, z } = position;
    torus.position.set(x, y, z);
    this.scene.add(torus);

    return torus;
  }

  addStar(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const x = THREE.MathUtils.randFloatSpread(100);
    const y = THREE.MathUtils.randFloatSpread(100);
    const z = THREE.MathUtils.randFloatSpread(100);

    star.position.set(x, y, z);
    this.scene.add(star);
    return star;
  }

  addMoon(
    moonTexture: THREE.Texture,
    normalTexture: THREE.Texture,
    position: Position
  ): THREE.Mesh {
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(2, 60, 60),
      new THREE.MeshLambertMaterial ( 
        { color: 0xffffff ,
        map: moonTexture ,
         reflectivity:0
        } 
      
      )
    );

    moon.position.set(position.x, position.y, position.z);

    this.scene.add(moon);

    return moon;
  }

  rayCastToPositionFromCamera(pointer: THREE.Vector2): THREE.Intersection[] | null {
    this.raycaster.setFromCamera(pointer, this.camera);
    const intersects: THREE.Intersection[] = this.raycaster.intersectObjects(this.scene.children);
    if (intersects.length > 0) {
      return intersects;
    }
    return null;
  }
}
