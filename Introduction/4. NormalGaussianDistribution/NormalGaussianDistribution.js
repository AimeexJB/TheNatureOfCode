function setup() {
	createCanvas(640, 360);
	background(127);
}

function draw() {
	var xloc = randomGaussian(); //getting a random number with a mean of 0 and a standard deviation of 1
	console.log(xloc);

	var sd = 60; //defining the standard deviation
	var mean = width/2; //moving the random gaussian to the middle of the screen

	xloc = (xloc * sd) + mean; //scaling the gaussian

	fill(0, 10);
	noStroke();
	ellipse(xloc, height/2, 16, 16); //drawing the ellipse
}