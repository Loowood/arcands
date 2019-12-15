const queue = new createjs.LoadQueue(true);
queue.on("fileload", handleFileLoad);
queue.on("complete", handleComplete);
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

function handleComplete (event) {
	arcands = document.querySelectorAll(".arcand");

	// Aria Labels
	for ( let i = 0; i < arcands.length; i++ ) {
		arcands[i].setAttribute("aria-label", "Orbe n°".concat((i+1).toString()) + " Face visible");
	}
	// Keyboard event Listeners
	document.addEventListener('keydown', (event) => {
		if ( document.querySelector("#characters").contains(document.activeElement) ){
			let currentIdFocused = parseInt(document.activeElement.id.substr(7, 1));
			console.log("Current Id Focused", currentIdFocused.toString());
			if (event.key === "ArrowLeft") {
				currentIdFocused -= (currentIdFocused > 1)? 1 : 0;
				document.querySelector("#arcand-".concat(currentIdFocused.toString())).focus();
			} else if (event.key === "ArrowRight") {
				currentIdFocused += (currentIdFocused < 9)? 1 : 0;
				document.querySelector("#arcand-".concat(currentIdFocused.toString())).focus();
			} else if (event.key === " ") {
				document.activeElement.click();
			}

		}else {
			if (event.key === " " ) {
				document.querySelector("#arcand-1").focus();
			}
		}
	})
}

function toggleFlip(event) {
	console.log(event.target);
	console.log(event.target.id);
	console.log(event.target.classList.toggle("flipped"));
	let idOrbe = /arcand-(\d+)/.exec(event.target.id.toString())[1];
	if ( event.target.classList.contains("flipped") ) {
		event.target.setAttribute("aria-label", "Orbe n°".concat(idOrbe) + " Face cachée");
	} else {
		event.target.setAttribute("aria-label", "Orbe n°".concat(idOrbe) + " Face visible");
	}
}

function toggleFlipTarget(target) {
	console.log(target);
	let idOrbe = /arcand-(\d+)/.exec(target.id.toString())[1];
	console.log(idOrbe);
	if ( target.classList.contains("flipped") ) {
		target.setAttribute("aria-label", "Orbe n°".concat(idOrbe) + " Face cachée");
	} else {
		target.setAttribute("aria-label", "Orbe n°".concat(idOrbe) + " Face visible");
	}
	return target;
}
