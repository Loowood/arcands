let a1 = new Arcand(1);

function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log(a1.number);
}

function draw() {
    background(20);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
