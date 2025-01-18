import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class ThreeWorld {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  raycaster!: THREE.Raycaster;
  controls?: OrbitControls;

  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    showControls: boolean = true
  ) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Optionally enable OrbitControls
    if (showControls) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // Smooth controls
    }

    // Add basic lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(10, 10, 10);
    this.scene.add(ambientLight, pointLight);

    this.raycaster = new THREE.Raycaster();

    // Set default camera position
    this.camera.position.set(0, 20, 50);
  }

  addTorus(
    radius: number,
    tube: number,
    radialSegments: number,
    tubularSegments: number,
    color: number,
    position: { x: number; y: number; z: number }
  ): THREE.Mesh {
    const geometry = new THREE.TorusGeometry(
      radius,
      tube,
      radialSegments,
      tubularSegments
    );
    const material = new THREE.MeshLambertMaterial({ color: color });
    const torus = new THREE.Mesh(geometry, material);

    // Set position
    torus.position.set(position.x, position.y, position.z);
    this.scene.add(torus);

    return torus;
  }

  addStar(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    // Randomize star position
    const x = THREE.MathUtils.randFloatSpread(200);
    const y = THREE.MathUtils.randFloatSpread(200);
    const z = THREE.MathUtils.randFloatSpread(200);

    star.position.set(x, y, z);
    this.scene.add(star);

    return star;
  }

  addMoon(
    moonTexture: THREE.Texture,
    normalTexture: THREE.Texture,
    position: { x: number; y: number; z: number }
  ): THREE.Mesh {
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(2, 60, 60),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );

    // Set position
    moon.position.set(position.x, position.y, position.z);
    this.scene.add(moon);

    return moon;
  }

  cleanup() {
    this.scene.traverse((child) => {
      if ((child as THREE.Mesh).geometry) {
        (child as THREE.Mesh).geometry.dispose();
      }
      if ((child as THREE.Mesh).material) {
        const material = (child as THREE.Mesh).material as THREE.Material;
        material.dispose();
      }
    });

    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
