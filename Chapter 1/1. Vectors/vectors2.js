var x = 100;
var y = 100;

//varying the speed so the ball doesnt move at a 45° angle
var xspeed = 2.5;
var yspeed = 2;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	x = x + xspeed; //adding the speed to the x position
	y = y + yspeed; //adding the speed to the y position

	//this statement stops the ball from going off the screen, needed for the x and y directions
	if ((x > width) || (x < 0)) {
		xspeed = xspeed * -1;
	}
	if ((y > height) || (y < 0)) {
		yspeed = yspeed * -1;
	}

	//displaying the circle
	stroke(0);
	strokeWeight(2);
	fill(127);
	ellipse(x, y, 48, 48);
}