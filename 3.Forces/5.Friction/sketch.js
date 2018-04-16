var movers = [];
var noOfMovers = 10;

function setup() {
	createCanvas(600,600);
	for(var i=0; i<noOfMovers; i++) { //creating a loop for all of the movers
		movers[i] = new Mover(Math.floor(random(10, 50))); //using the math.random function to give the movers a random mass
	}
	
}

function draw(){
	background(255);

	for(var i=0; i<noOfMovers; i++) {
		var wind = createVector(0.8,0);
		var gravity = createVector(0,0.1 * movers[i].mass); //adding real gravity

		var c = 0.5; //the coefficient of friction
		var normal = 1; //reactive force
		var frictionMag = c * normal; //friction magnitude
		var friction = p5.Vector.mult(movers[i].velocity, -1);

		friction.normalize(); //normalising the vector
		friction.mult(frictionMag);

		movers[i].applyForce(friction);
		//movers[i].applyForce(wind); //passing the wind function to the apply force
		//movers[i].applyForce(gravity);

		movers[i].checkEdges();
		movers[i].update(); //updating the object with the new values
		movers[i].display(); //displaying the mover object
	}
} 

