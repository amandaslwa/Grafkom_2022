var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

cam.position.z += 6;

let controls = new THREE.OrbitControls(cam, renderer.domElement);

var light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0,3,2);
scene.add(light1);

const a_texture = new THREE.TextureLoader().load('./texture/A.png')
const brick_texture = new THREE.TextureLoader().load('./texture/brick.jpg')

const persegi = new THREE.BufferGeometry();
let vertices = new Float32Array([
    -1.0, -1.0, 0.0,
    1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,

    1.0, 1.0, 0.0,
    -1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
]);

let uvs = new Float32Array([
    0.0, 0.0,
    1.0, 0,0,
    1.0, 1.0,

    1.0, 1.0,
    0.0, 1.0,
    0.0, 0.0,
]);

persegi.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
persegi.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
let persegiMat = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
let plane = new THREE.Mesh(persegi, persegiMat);
plane.position.set(-2,0,0);
scene.add(plane);

var box = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
var boxMat1 = new THREE.MeshBasicMaterial({
    map: a_texture
});
var cube1 = new THREE.Mesh(box, boxMat1);
cube1.position.set(2,0,0);
scene.add(cube1);

window.addEventListener('resize', function() { 
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    cam.aspect = width/height;
    cam.updateProctionMatxrix();
});

function draw() {
    requestAnimationFrame(draw);

    cube1.rotation.y += 0.01;
    cube1.rotation.x += 0.01;

    renderer.render(scene, cam); 
}
draw();