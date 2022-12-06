var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

cam.position.z += 6;

let controls = new THREE.OrbitControls(cam, renderer.domElement);

var box = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
const sand_texture = new THREE.TextureLoader().load('./texture/sand.jpg')
const grass_texture = new THREE.TextureLoader().load('./texture/grass.jpg')
const metal_texture = new THREE.TextureLoader().load('./texture/metal.jpg')
const brick_texture = new THREE.TextureLoader().load('./texture/brick.jpg')
const brick2_texture = new THREE.TextureLoader().load('./texture/brick2.jpg')
const light_texture = new THREE.TextureLoader().load('./texture/light.jpg')


var light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0,3,2);
scene.add(light1);


var boxMat1 = new THREE.MeshLambertMaterial({
    map: metal_texture
});
var cube1 = new THREE.Mesh(box, boxMat1);
cube1.position.set(-3,0,0);
scene.add(cube1);

var boxMat2 = new THREE.MeshPhongMaterial({
    map: metal_texture,
    shininess: 100
});
var cube2 = new THREE.Mesh(box, boxMat2);
cube2.position.set(-1,0,0);
scene.add(cube2);

var boxMat3 = new THREE.MeshPhongMaterial({
    map: metal_texture,
    bumpMap: brick_texture,
    bumpScale: 0.05,
    shininess: 100
});
var cube3 = new THREE.Mesh(box, boxMat3);
cube3.position.set(1,0,0);
scene.add(cube3);

var boxMat4 = new THREE.MeshPhongMaterial({
    map: metal_texture,
    bumpMap: brick_texture,
    displacementMap: brick_texture,
    displacementScale: 0.075,
    bumpScale: 0.05,
    shininess: 100
});
var cube4 = new THREE.Mesh(box, boxMat4);
cube4.position.set(3,0,0);
scene.add(cube4);

var boxMat5 = new THREE.MeshStandardMaterial({
    color: 0x000000,ap: metal_texture,
    aoMap: light_texture,
    aoMapIntensity: 100
});
var cube5 = new THREE.Mesh(box, boxMat5);
cube5.position.set(-2,2,0);
scene.add(cube5);

var boxMat6 = new THREE.MeshStandardMaterial({
    color: 0x000000,
    lightMap: light_texture,
    lightMapIntensity: 100
});
var cube6 = new THREE.Mesh(box, boxMat6);
cube6.position.set(2,2,0);
scene.add(cube6);


window.addEventListener('resize', function() { 
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    cam.aspect = width/height;
    cam.updateProctionMatxrix();
});

// buat muncul di canvas
function draw() {
    requestAnimationFrame(draw);

    cube1.rotation.y += 0.01;
    cube1.rotation.x += 0.01;

    cube2.rotation.y += 0.01;
    cube2.rotation.x += 0.01;

    cube3.rotation.y += 0.01;
    cube3.rotation.x += 0.01;

    cube4.rotation.y += 0.01;
    cube4.rotation.x += 0.01;

    cube5.rotation.y += 0.01;
    cube5.rotation.x += 0.01;

    cube6.rotation.y += 0.01;
    cube6.rotation.x += 0.01;
    renderer.render(scene, cam); // menggambar di scene menggunakan camera
}

draw();