let a1 = new Arcand(1);
let can1;
let dos;
function preload() {
	can1 = loadImage('../../assets/images/Canard 1.png');
	dos = loadImage('../../assets/images/Dos.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(20);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.02);
	push();
	texture(can1);
	rotateY(PI);
	box(160, 240, 8);
	pop();
	push();
	translate(0,0,8);
	texture(dos);
	box(160, 240, 8);
	pop();
	push();
	translate(80.5,0,4);
	rotateY(PI/2);
	box(16, 240, 0.2);
	pop();
	push();
	translate(-80.5,0,4);
	rotateY(3 * PI/2);
	box(16, 240, 0.2);
	pop();
	push();
	translate(0,120.5,4);
	rotateX(PI/2);
	box(160, 16, 0.2);
	pop();
	push();
	translate(0,-120.5,4);
	rotateX(3 * PI/2);
	box(160, 16, 0.2);
	pop();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
