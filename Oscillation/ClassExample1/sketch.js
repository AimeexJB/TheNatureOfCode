
var startAngle = 0;
var angleVel = 0.2;

function setup() {
    createCanvas(640, 640);
	background(255);
}

function draw() {
    background(255,4);
    stroke(150);
    fill(55);

    startAngle += 0.015;
    var angle = startAngle

    for(var i = 0; i <= width; i+=10) {
		var y = map(sin(angle), -1, 1, 0, height);
		ellipse(i, y, 20, 20);
		//ellipse(width/2, y, 20, 20);
		angle += angleVel;
		}

		
}
