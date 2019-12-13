const queue = new createjs.LoadQueue(true);
queue.on("fileload", handleFileLoad);
// Loading Cards Images
for (let i = 0; i < 9; i ++) {
	queue.loadFile({id: "arcand-back", number:i+1, src: "../../assets/images/Dos.png", type: createjs.Types.IMAGE}, false);
}
// Loading Arcands Images
for (let i = 0; i < 9; i ++) {
	console.log("Loading Arcand n°".concat((i+1).toString()));
	queue.loadFile({id:"arcand-front", number:i+1, src:"../../assets/images/Canard ".concat((i+1).toString(), ".png"), type: createjs.Types.IMAGE}, false);
}

// Loading the whole thing
queue.load();

function handleFileLoad (event) {
	let item = event.item;

	if (item.id === "arcand-front"){
		console.log("Loaded arcand n°".concat(item.number.toString()));
		document.querySelector('#arcand-' + item.number.toString() + ' .card-front').appendChild(event.result);
	}
	if (item.id === "arcand-back") {
		console.log("Loaded Arcand back");
		document.querySelector('#arcand-' + item.number.toString() + ' .card-back').appendChild(event.result);
	}
}

function toggleFlip(event) {
	console.log(event.target);
	console.log(event.target.classList.toggle("flipped"));
}