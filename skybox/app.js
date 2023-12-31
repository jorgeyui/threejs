import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 45, 30000 );
camera.position.set(-900,-200,-900);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change',renderer);
controls.minDistance = 500;
controls.maxDistance = 1500;

let materialArray = [];
let texture_bk = new THREE.TextureLoader().load('bay_bk.jpg');
let texture_dn = new THREE.TextureLoader().load('bay_dn.jpg');
let texture_ft = new THREE.TextureLoader().load('bay_ft.jpg');
let texture_lf = new THREE.TextureLoader().load('bay_lf.jpg');
let texture_ry = new THREE.TextureLoader().load('bay_rt.jpg');
let texture_up = new THREE.TextureLoader().load('bay_up.jpg');
materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_ry}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

for(let i=0; i<6; i++)
    materialArray[i].side = THREE.BackSide;


let skyGeo = new THREE.BoxGeometry(10000,10000,10000);
let skybox = new THREE.Mesh(skyGeo, materialArray);
scene.add(skybox);
animate();


function animate()
{
    renderer.render(scene,camera);
    requestAnimationFrame(animate)
}