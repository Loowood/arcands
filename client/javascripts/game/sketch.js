let arcands = [];
let arcands_textures = [];
let dos_texture;
let coteVertical_texture;
let coteHorizontal_texture;
function preload() {
	for( let i = 0; i < 9; i ++ ) {
		arcands_textures.push(loadImage('../../assets/images/Canard ' + (i+1).toString() + '.png'));
	}
	dos_texture = loadImage('../../assets/images/Dos.png');
	coteVertical_texture = loadImage('../../assets/images/CotéVertical.png');
	coteHorizontal_texture = loadImage('../../assets/images/CotéHorizontal.png');
	Arcand.dos_texture = dos_texture;
	Arcand.coteVertical_texture = coteVertical_texture;
	Arcand.coteHorizontal_texture = coteHorizontal_texture;
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
	for( let i = 0; i < 9; i ++ ) {
		arcands.push(new Arcand(i+1, arcands_textures[i]));
	}
}

function draw() {
    background(20);
	translate(-windowWidth/2, -windowHeight/3);
	for( let i = 0; i < 9; i ++ ){
		arcands[i].display((i+1)*170 -100, 200);
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
