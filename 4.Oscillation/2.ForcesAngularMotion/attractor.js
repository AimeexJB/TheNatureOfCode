var Attractor = function() {

    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 1;

    this.calculateAttraction = function(m) {
        
        var force = p5.Vector.sub(this.position, m.position); 
        var distance = force.mag(); 
        distance = constrain(distance, 5, 25);  
        force.normalize();
        var strength = (this.G * this.mass * m.mass) / (distance * distance);
        force.mult(strength);
        return force;
    }

    this.display = function() {
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke(0);
        fill(127);
        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }
}