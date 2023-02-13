function submitClicked() {
	let line = document.getElementById("line1");
	line.classList.add("redLine")
}

document.getElementById("btn1").addEventListener('click', submitClicked);

function mouseOverCircle() {
	let circle = docum.getElementById("circ1");
	line.classList.add("orange");
}

document.getElementById("circ1").addEventListener('mouseOver', mouseOverCircle);

