import * as THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0xffffff, 1);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.set(0, 0, 5);
renderer.render(scene, camera);

let theta = 0;
const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener(
    'resize',
        () => {
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerWidth, innerHeight);

        }
);