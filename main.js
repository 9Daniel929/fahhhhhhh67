import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.001,
  10000000000
);

camera.position.set(1.3257474773333948, 4.085757118896425, 8.908145984535496);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometries
const geo1 = new THREE.BoxGeometry(1, 1, 1);
const geo2 = new THREE.BoxGeometry(1, 1, 1);
const geo3 = new THREE.BoxGeometry(1, 1, 1);
const geo4 = new THREE.BoxGeometry(1, 1, 1);

// Materials
const mat1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const mat2 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const mat3 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const mat4 = new THREE.MeshStandardMaterial({ color: 0xffffff });

// Meshes
const box1 = new THREE.Mesh(geo1, mat1);
box1.scale.set(8.196479872858708, 0.10627480044095419, 7.583214829434284);
box1.position.set(0, -0.039698136183214605, 0);

const box2 = new THREE.Mesh(geo2, mat2);
box2.position.set(0, 3.7216049196755128, 0);

const box3 = new THREE.Mesh(geo3, mat3);
box3.position.set(0, 2.770081741401227, 0);

// Small boxes
function smallBox(x, y) {
  const mesh = new THREE.Mesh(geo4, mat4);
  mesh.scale.set(0.31423856538617906, 1, 0.5655551700344368);
  mesh.position.set(x, y, 0);
  return mesh;
}

scene.add(box1, box2, box3);

scene.add(smallBox(-0.22949355901836954, 1.7761159613843853));
scene.add(smallBox(0.21229651993020027, 1.7761159613843853));
scene.add(smallBox(0.6806725058896312, 2.749653517782651));
scene.add(smallBox(-0.6396941602799919, 2.749653517782651));

// Light (needed for MeshStandardMaterial)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
