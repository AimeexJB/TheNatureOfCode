function setup() {
	createCanvas(640, 360);
	background(127);
}

function draw() {
	var xloc = randomGaussian();
	console.log(xloc);

	var sd = 60;
	var mean = width/2;

	xloc = (xloc * sd) + mean;

	fill(0, 10);
	noStroke();
	ellipse(xloc, height/2, 16, 16);
}