var Mover = function() {

	this,location = createVector(random(width), random(height));
	this.velocity = createVector(10, 5);

	this.update = function() {
		this.location.add(this.velocity);
	}

	this.display = function() {
		//picking a brush
		stroke(150);
		strokeWeight(2);
		fill(255,0,0);

		//add and draw the ellipse at the new location vector points 
		ellipse(this.location.x, this.location.y, 40, 40);
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1 //reversing the velocity
        }
        if (this.location.y > width || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1 //reversing the velocity
        }
	}

}

