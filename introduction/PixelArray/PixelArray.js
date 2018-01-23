function setup() {
	createCanvas(400, 400);
	pixelDensity(1); //makes it compatible with all screens
	background(51);
}

function draw() {
	loadPixels(); //load the pixels

	var index = (2+2*5)*4 //you locate the Red value of the pixel with this (X+Y*Width)*4
	pixels[index + 0] = 255; //R
	pixels[index + 1] = 0; //G
	pixels[index + 2] = 0; //B
	pixels[index + 3] = 255; //A = opacity

	updatePixels(); //update the pixels
}