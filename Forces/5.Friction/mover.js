var Mover = function(m) {

    //this.location = createVector(30, 30); //saving the location as a vector object
    this.location = createVector(Math.floor(random(width)), Math.floor(random(height))); //giving the vector a random width and height on the screen
    this.velocity = createVector(2, 2); //creating the velocity for the vector
    this.acceleration = createVector(0, 0); //creating the acceleration fot the vector
    this.mass = m; //adding the mass

    this.update = function() {
        
        this.velocity.add(this.acceleration); //VALV
        this.velocity.limit(10); //limitting the velocity so the acceleration isnt added evertime the page refreshed
        this.location.add(this.velocity); //VALV

        this.acceleration.mult(0); //setting the acceleration to 0. //getting rid of the acceleration every time it is drawn so the values dont accumulate.
    }

    this. display = function() {

        fill(125,0,253);
        //fill(random(255));
        ellipse(this.location.x, this.location.y, this.mass, this.mass) //setting the position of the mover and setting the radius to the mass

    }

    this.checkEdges = function() { //stopping the vector from going off screen
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1 //reversing the velocity
        }
        if (this.location.y > width || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1 //reversing the velocity
        }
    }

    this.applyForce = function(force) { //getting the wind vector
        var f = p5.Vector.div(force, this.mass); //using a static function.. dividing the force by the mass... makes the smaller objects fall faster

        this.acceleration.add(f); //adding the force to the acceleration and vector

    }


}