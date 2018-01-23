var yOff = 1000.0;

function setup() {
	frameRate(1);
	createCanvas(400, 400);
	pixelDensity(1); //makes it compatible with all screens
	noiseDetail(10);
	background(51);
}

function draw() {
	loadPixels();

	for (var y=0; y<height; y++) { //loop through the Y values
		var xOff = 100.0;

		for (var x=0; x<width; x++) { //loop through the X values
			var index = (x + y * width) * 4 //you locate the Red value of the pixel with this (X+Y*Width)*4
			var bright = map(noise(xOff, yOff), 0, 1, 0, 255); //randomising the colours
			pixels[index + 0] = bright; //R
			pixels[index + 1] = bright; //G
			pixels[index + 2] = bright; //B
			pixels[index + 3] = 255; //A = opacity

			xOff += 0.02;
		}
		yOff += 0.02
	}

	updatePixels();
}

