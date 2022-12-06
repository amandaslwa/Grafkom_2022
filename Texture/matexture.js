var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

cam.position.z += 6;

let controls = new THREE.OrbitControls(cam, renderer.domElement);

var box = new THREE.BoxGeometry(1, 1, 1);

const anime1_texture = new THREE.TextureLoader().load('./texture/1.jpg')
const anime2_texture = new THREE.TextureLoader().load('./texture/2.jpg')
const anime3_texture = new THREE.TextureLoader().load('./texture/3.jpg')
const anime4_texture = new THREE.TextureLoader().load('./texture/4.jpg')
const anime5_texture = new THREE.TextureLoader().load('./texture/5.jpg')
const anime6_texture = new THREE.TextureLoader().load('./texture/6.jpg')

var light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0,3,2);
scene.add(light1);

var boxMat = [
    new THREE.MeshBasicMaterial({map: anime1_texture}),
    new THREE.MeshBasicMaterial({map: anime2_texture}),
    new THREE.MeshBasicMaterial({map: anime3_texture}),
    new THREE.MeshBasicMaterial({map: anime4_texture}),
    new THREE.MeshBasicMaterial({map: anime5_texture}),
    new THREE.MeshBasicMaterial({map: anime6_texture})
];
var cube = new THREE.Mesh(box, boxMat);
cube.position.set(0,0,0);
scene.add(cube);

window.addEventListener('resize', function() { 
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    cam.aspect = width/height;
    cam.updateProctionMatxrix();
});

function draw() {
    requestAnimationFrame(draw);

    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;

    renderer.render(scene, cam); 
}

draw();