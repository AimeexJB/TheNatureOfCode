var Liquid = function(x, y, w, h, r, g, b, o) {

	this.location = createVector(x, y);
	this.width = w;
	this.height = h;
	//this.coeffDrag = c;

	this.display = function() {
		fill(r, g, b, o);
		rect(this.location.x, this.location.y, this.width, this.height);
	}

	this.contains = function(m) {
		return m.location.y > this.location.y && m.location.y < this.location.y + this.height && 
				 m.location.x > this.location.x && m.location.x < this.location.x +this.width
	}
}

