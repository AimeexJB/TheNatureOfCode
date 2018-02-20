var Liquid = function(x, y, w, h, c, r, g, b, o) {

	this.location = createVector(x, y);
	this.width = w;
	this.height = h;
	this.coeffDrag = c;

	this.display = function() {
		fill(r, g, b, o);
		rect(this.location.x, this.location.y, this.width, this.height);
	}

	this.contains = function(m) {
		return m.location.y > this.location.y && m.location.y < this.location.y + this.height && 
				 m.location.x > this.location.x && m.location.x < this.location.x +this.width
	}

	this.calculateDrag = function(m) {
		var speed = m.velocity.mag();
		var dragMagnitude = this.coeffDrag * speed * speed;

		//direction is inverse of velocity
		var dragForce = p5.Vector.mult(m.velocity, -1);

		//scale according to magnitude
		dragForce.normalize();
		dragForce.mult(dragMagnitude);
		return dragForce;

	}
}

