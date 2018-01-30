function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	var mouse = createVector(mouseX, mouseY);
	var center = createVector(width/2, height/2);
	var vectorLine = mouse.sub(center);//centring the line

	var m = vectorLine.mag(); //getting the magnitude of the vector and displaying it at the top of the canvas
	fill(255); 
	stroke(0);
	rect(0, 0, m, 10);

	//displaying the line
	translate(width/2, height/2); //scaling the line to the middle of the screem
	strokeWeight(2);
	stroke(255);
	line(0, 0, vectorLine.x,vectorLine.y);
	
}