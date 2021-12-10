import * as THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Webgl {
    constructor() {
        this.camera = this.newCamera();
        this.scene = this.newScene();
        this.renderer = this.newRenderer();
        this.canvas = this.newCanvas();
        this.addStartingListener();

        this.start();
    }

    newRenderer() {
        let renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        return renderer;
    }


    newCamera() {
        let camera=new THREE.PerspectiveCamera(75,
            window.innerWidth / window.innerHeight, .1, 1000);
        camera.position.z=10;
        return camera;
    }


    newScene() {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2ecc71);
        return scene;
    }


    newCanvas() {
        let div = document.getElementById("canvas");
        return div.appendChild(this.renderer.domElement);
    }

    addStartingListener() {
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    start() {
        let geometry=new THREE.PlaneGeometry();
        let material=new THREE.MeshBasicMaterial({side:THREE.DoubleSide});
        let mesh=new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.target.set( 0, 0, 0 );
        controls.update();
        controls.addEventListener( 'change', ()=>{this.render();});
    }

    render(){
        this.renderer.render(this.scene, this.camera);
    }

}

let webgl = new Webgl();
console.log(webgl);
const animate = () => {
    webgl.render();
    window.requestAnimationFrame(animate);
}
animate();
