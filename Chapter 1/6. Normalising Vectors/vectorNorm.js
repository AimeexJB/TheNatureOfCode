function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	var mouse = createVector(mouseX, mouseY);
	var center = createVector(width/2, height/2);
	var vectorLine = mouse.sub(center);//centring the line

	vectorLine.normalize(); //making the vector 1 unit in length
	vectorLine.mult(50); //multiplying it by 50 to make it visable

	//displaying the line
	translate(width/2, height/2); //scaling the line to the middle of the screem
	strokeWeight(2);
	stroke(255);
	line(0, 0, vectorLine.x,vectorLine.y);
	
}