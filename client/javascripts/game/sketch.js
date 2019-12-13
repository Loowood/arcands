let a1 = new Arcand(1);
let canard1_texture;
let dos_texture;
let coteVertical_texture;
let coteHorizontal_texture;
function preload() {
	canard1_texture = loadImage('../../assets/images/Canard 1.png');
	dos_texture = loadImage('../../assets/images/Dos.png');
	coteVertical_texture = loadImage('../../assets/images/CotéVertical.png');
	coteHorizontal_texture = loadImage('../../assets/images/CotéHorizontal.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(20);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.02);
	push();
	texture(canard1_texture);
	rotateY(PI);
	box(160, 240, 8);
	pop();
	push();
	translate(0,0,8);
	texture(dos_texture);
	box(160, 240, 8);
	pop();
	push();
	translate(80.5,0,4);
	rotateY(PI/2);
	texture(coteVertical_texture);
	box(16, 240, 0.2);
	pop();
	push();
	translate(-80.5,0,4);
	rotateY(3 * PI/2);
	texture(coteVertical_texture);
	box(16, 240, 0.2);
	pop();
	push();
	translate(0,120.5,4);
	rotateX(PI/2);
	texture(coteHorizontal_texture);
	box(160, 16, 0.2);
	pop();
	push();
	translate(0,-120.5,4);
	rotateX(3 * PI/2);
	texture(coteHorizontal_texture);
	box(160, 16, 0.2);
	pop();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
