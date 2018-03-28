//mover.js
var Mover = function(x, y, vx, vy, ax, ay, m) { //x and y locations, xand y velocity, x and y acceleration, m is mass

  this.location = createVector(x, y);
  this.velocity = createVector(vx, vy);
  this.acceleration = createVector(ax, ay);
  this.mass = m;

  this.update = function () {
    this.velocity.add(this.acceleration); 
    this.velocity.limit(10); 
    this.location.add(this.velocity); 

    this.acceleration.mult(0);

  }

  this.display = function () {
    fill(125,0,253);
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
  }

  this.checkEdges = function() { 
    if (this.location.x > width || this.location.x < 0) {
        this.velocity.x = this.velocity.x * -1 
    }
    if (this.location.y > width || this.location.y < 0) {
        this.velocity.y = this.velocity.y * -1 
    }
  }

  this.applyForces = function () {
    
  }
}