function setup() {
	createCanvas(640, 360);
	background(127);
}

function draw() {
	var xloc = randomGaussian();
	var yloc = randomGaussian();

	var xsd = 100;
	var ysd = 40;

	var xMean = width/2;
	var yMean = height/2;

	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, yloc, 16, 16);
}