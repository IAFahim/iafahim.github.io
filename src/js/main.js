import * as THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'three';

let renderer, scene, camera, canvas;

const init = () => {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setClearColor(0xffff00, 1);
    renderer.setSize(innerWidth, innerHeight);
    camera = new THREE.PerspectiveCamera(75,
        innerWidth / innerHeight, .1, 1000);

    scene=new THREE.Scene();
    let div= document.getElementById("canvas");
    canvas=div.appendChild(renderer.domElement);

    addEventListener("resize", ()=>{
        camera.aspect=innerWidth/innerWidth;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
    });

    renderer.render(scene, camera);
}

const animate=()=>{
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();



