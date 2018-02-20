//sketch.js
var mover;
var liquid;

function setup() {
  createCanvas(600,600);

  mover = new Mover(200, 200, 4, 2, 0.01, 0.02, 50);
  liquid = new Liquid(0, 300, 599, 299, 0.2, 0, 0, 255, 180);
}

function draw() {
  background(255);

  if(liquid.contains(mover)) {
  	console.log("Is inside Liquid")
    var dragForce = liquid.calculateDrag(mover);
    mover.applyForce(dragForce);
  }

  liquid.display();

  liquid.calculateDrag(mover);

  mover.update();
  mover.display();
  mover.checkEdges();

}