var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
cam.position.z += 6;


var light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0,3,2);
scene.add(light1);

let controls = new THREE.OrbitControls(cam, renderer.domElement);

let video = document.getElementById('video1');

video.src="video/TearDrop.mp4";
video.play();
video.loop = true;

let videoTexture = new THREE.VideoTexture(video);
let box = new THREE.BoxGeometry(1, 1, 1);
let boxMat = new THREE.MeshBasicMaterial({map: videoTexture});
let cube = new THREE.Mesh(box, boxMat);
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

    renderer.render(scene, cam); // menggambar di scene menggunakan camera
}

draw();