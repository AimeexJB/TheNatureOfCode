//Declaring the object
var walkers;
var noOfWalkers;

//seting up the canvas and object
function setup() {
	createCanvas(1200, 1000);
	noOfWalkers = 10;
	walkers = []; //array of walkers
	for (i=0; i<noOfWalkers; i++) {
		walkers[i] = new Walker();
	}
	background(127);
}

//calling the draw function, occurs every frame
function draw() {
	fill(0, 15); //gives the fill 15% opacity
	rect(0, 0, width, height);
	for (i=0; i<noOfWalkers; i++) {
		walkers[i].step(); //setting up the step function
		walkers[i].render(); //setting up the render function
	}
}

//setting up the walker class
function Walker() {
	this.position = createVector(width/2, height/2); //creating a vector which stores 2 objects
	this.nOff = createVector(random(1000), random(1000)); //xOffset, getting a random number between 1 and 1000

	this.render = function () {
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.position.x, this.position.y, map(noise(this.nOff.x), 0, 1, 20, 200), map(noise(this.nOff.x), 0, 1, 20, 200));
	}

	this.step = function() {
		this.position.x = map(noise(this.nOff.x), 0, 1, 0 -200, width+200); //scaling using the map function
		this.position.y = map(noise(this.nOff.y), 0, 1, 0 -200, height+200);
		this.nOff.add(0.005, 0.005)
	}
}


