const particles = [];
let speed;
function setup() {
    createCanvas(windowWidth, windowHeight);
    for( let i = 0; i < 100; i += 1 ){
        let sizeTemp = random(20) + 5;
        let maxSpeedTemp = map(sizeTemp, 0, 20, 3, 10);
        let xTemp = random(windowWidth);
        let yTemp = random(windowHeight);
        colorMode(HSB);
        let colorTemp = color(floor(random(255)), map(sizeTemp, 0, 20, 0, 255), map(maxSpeedTemp, 3, 10, 0, 255));
        let p = new Particle(xTemp, yTemp, sizeTemp, createVector(0,0), maxSpeedTemp, colorTemp);
        particles.push(p);
    }
    speed = createVector(1);
    console.log(windowWidth, windowHeight);
}

function draw() {
    colorMode(RGB);
    background(0,45,60, 80);
    // particles[0].apply(speed);
    // particles[0].update();
    // particles[0].validate(0, windowWidth, 0, windowHeight);
    // particles[0].display();
    particles.forEach( (p) => {
        p.apply(speed);
        p.update();
        p.validate(0, windowWidth);
        p.display();
    })
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
