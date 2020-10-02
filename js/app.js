// UI Vars
const colors = ["red","green","yellow","cyan","purple","pink","grey","silver","blue"];
const hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const color = document.getElementById('color');
const colorFlipBtn = document.getElementById('btn');
const hexFlipBtn = document.getElementById('btn');
const display = document.getElementById('showcolor');
const mainarea = document.getElementById('color-container');
const hex = document.getElementById('hex');


// EventListeners
color.addEventListener('click', colorEvent);
hex.addEventListener('click', hexEvent);



// Functions 
function colorEvent(e) {
	hexFlipBtn.removeEventListener('click', hexcolorEvent);
	colorFlipBtn.addEventListener('click', paintColor);
}

function hexEvent(e){
	colorFlipBtn.removeEventListener('click', paintColor);
	hexFlipBtn.addEventListener('click', hexcolorEvent);
}


function paintColor(e){
	var randomNumber = Math.floor(Math.random() * 9);
	display.textContent = 'Background Color: '+colors[randomNumber];
	mainarea.style.backgroundColor = colors[randomNumber]; 
}

function hexcolorEvent(h){
	let hexkey = '#';
	for(i=0; i < 6; i++){
		var randhexNumber = Math.floor(Math.random() * hexArray.length);
		hexkey+=hexArray[randhexNumber];
	}
	display.textContent = 'Background Color: ' +hexkey;
	mainarea.style.backgroundColor = hexkey;
}