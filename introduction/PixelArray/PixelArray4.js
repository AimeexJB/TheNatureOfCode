function setup() {
	createCanvas(400, 400);
	pixelDensity(1); //makes it compatible with all screens
	background(51);
}

function draw() {
	loadPixels();

	for (var y=0; y<height; y++) { //loop through the Y values
		for (var x=0; x<width; x++) { //loop through the X values
			var index = (x + y * width) * 4 //you locate the Red value of the pixel with this (X+Y*Width)*4
			var bright = random(255); //randomising the colours
			pixels[index + 0] = bright; //R
			pixels[index + 1] = bright; //G
			pixels[index + 2] = bright; //B
			pixels[index + 3] = 255; //A = opacity
		}
	}

	updatePixels();
}

