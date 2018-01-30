//Declaring the object
var walker;

//seting up the canvas and object
function setup() {
	createCanvas(1200, 1000);
	walker = new Walker();
	background(127);
}

//calling the draw function, occurs every frame
function draw() {
	fill(0, 15); //gives the fill 15% opacity
	rect(0, 0, width, height);
	walker.step(); //setting up the step function
	walker.render(); //setting up the render function
}

//setting up the walker class
function Walker() {
	this.x = width / 2; //starting in the middle of the canvas
	this.xOff = random(1000); //xOffset, getting a random number between 1 and 1000

	this.render = function () {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.x, 500, 40, 40);
	}

	this.step = function() {
		this.x = map(noise(this.xOff), 0, 1, 0, width); //scaling using the map function
		this.xOff += 0.005
	}
}

