function setup() {
	createCanvas(640, 360);
	background(127);
}

function draw() {
	var xloc = randomGaussian(); //getting a random number with a mean of 0 and a standard deviation of 1
	var yloc = randomGaussian();

	var xsd = 100; //defining the standard deviation for the x axis
	var ysd = 40; //defining the standard deviation for the y axis

	var xMean = width/2; //moving the random gaussian to the middle of the screen
	var yMean = height/2;

	xloc = (xloc * xsd) + xMean; //scaling the gaussian
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, yloc, 16, 16); //drawing the ellipse
}