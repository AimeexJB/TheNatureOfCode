//sketch.js
var mover;
var liquid;

function setup() {
  createCanvas(600,600);

  mover = new Mover(200, 200, 4, 2, 0.01, 0.02, 50);
  liquid = new Liquid(200, 200, 150, 100, 0, 0, 255, 100);
}

function draw() {
  background(255);

  if(liquid.contains(mover)) {
  	console.log("Is inside Liquid")
  }

  liquid.display();

  mover.update();
  mover.display();
  mover.checkEdges();

}