var mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(50);
  mover.update();
  mover.checkEdges();
  mover.display();
}