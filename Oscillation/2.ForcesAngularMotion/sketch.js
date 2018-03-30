var movers = [];
var attractor;

function setup() {
    createCanvas(640, 360);

    for (let i = 0; i < 20; i++) {
        movers[i] = new Mover(random(0.1, 2), random(width), random(height));
    }
    
    attractor = new Attractor();
}

function draw() {
    background(51);

    attractor.display();

    for (var i = 0; i < 20; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        movers[i].applyForce(force);

        movers[i].update();
        movers[i].display();
    }
}