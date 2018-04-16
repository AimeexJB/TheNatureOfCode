var position; //or location
var velocity; //or speed

function setup() {
	createCanvas(640, 360);
	position = createVector(100, 100); //creating the vector and passing in 2 objects
	velocity = createVector(2, 2);
}

function draw() {
	background(51);

	position.add(velocity); //adding the velocity to the speed

	//this statement stops the ball from going off the screen, needed for the x and y directions
	if ((position.x > width) || (position.x < 0)) {
		velocity.x = velocity.x * -1;
	}
	if ((position.y > height) || (position.y < 0)) {
		velocity.y = velocity.y * -1;
	}

	//displaying the circle
	stroke(0);
	strokeWeight(2);
	fill(127);
	ellipse(position.x, position.y, 48, 48);
}