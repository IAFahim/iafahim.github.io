import * as THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'three';

class Webgl {
    constructor() {
        this.camera=this.newCamera();
        this.scene=this.newScene();
        this.renderer=this.newRenderer();
        this.canvas=this.newCanvas();

        this.addStartingListener();
        this.start();
    }
    
    newRenderer () {
        let renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        return renderer;
    }

    
    newCamera () {
        return new THREE.PerspectiveCamera(75,
            window.innerWidth / window.innerHeight, .1, 1000);
    }

    
    newScene () {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffff00);
        return scene;
    }

    
    newCanvas () {
        let div = document.getElementById("canvas");
        return div.appendChild(this.renderer.domElement);
    }

    
    start () {
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.render(this.scene, this.camera);
    }

    addStartingListener() {
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}

let webgl=new Webgl();
console.log(webgl);
const animate=()=> {
    webgl.renderer.render(webgl.scene, webgl.camera);
    window.requestAnimationFrame(animate);
}
animate();
