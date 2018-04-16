var windChime = [];
var movers = [];

function setup() {
    createCanvas(640, 640);

    windChime[0] = new WindChime(50, 50, 4, 0, 90);
    windChime[1] = new WindChime(580, 50, 4, 90, 180);
    windChime[2] = new WindChime(50, 580, 4, 270, 360);
    windChime[3] = new WindChime(580, 580, 4, 180, 270);

    //movers[0] = new Mover(320, 320, 0, 0, 0, 0, 10);

	for(var y=0; y < 100; y++) { 
		movers[y] = new Mover(random(0, 640), random(0, 640), 0, 0, 0, 0, random(10, 30)); 
	}
}

function draw() {
	background(255);

	for (var j=0; j<movers.length; j++) {
		 for (var i=0; i<windChime.length; i++) {
	 		movers[j].applyForce(windChime[i].windVec);
	 		movers[j].update();
		    movers[j].display();
		    movers[j].checkEdges();
	    }
	}

	for (var x=0; x<windChime.length; x++) {
        windChime[x].update();
        windChime[x].display();
    }

}
