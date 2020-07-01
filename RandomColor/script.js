let span = document.querySelector("span");
let body = document.querySelector("body");

body.style.backgroundColor = span.innerText;

function generate(){
	let randomColor = "";
	let characters = "0123456789abcdef";

	for(i=0;i<6;i++){
		randomColor = randomColor + characters[Math.floor(Math.random()*16)];
	}
	span.innerText = "#"+ randomColor;
	body.style.backgroundColor = "#"+randomColor;
}
