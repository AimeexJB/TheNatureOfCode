var x = 320;
var y = 180;

var xspeed = 2;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	x = x + xspeed; //adding the speed to the position

	//this statement stops the ball from going off the screen
	if ((x > width) || (x < 0)) {
		xspeed = xspeed * -1;
	}

	//displaying the circle
	stroke(0);
	strokeWeight(2);
	fill(127);
	ellipse(x, 180, 48, 48);
}