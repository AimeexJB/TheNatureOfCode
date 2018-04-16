# TheNatureOfCode - An Array of Movers

Similiar to the last example where we have the ellipse moving towards the mouse, in this example we have a bunch of ellipses moving towards the mouse.

We first declare the movers as an empty array and then in the setup function we use a for loop to create all of the movers along with creating the canvas.

```js
var movers = [];

function setup() {
    createCanvas(640, 360);
    for (var i = 0; i < 20; i++) {
        movers[i] = new Mover();
    }
}

```

In the draw function we set the background colour and use another for loop to update and display all of the movers.

```js
function draw() {
    background(51);

    for (var i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].display();
    }
}

```

In the mover function we create a location vector which will randomly put all the movers on the screen and spread them out on the canvas.The velocity vector is then set to a fixed value of (3,3) and the acceleration vector is then left blank.

```js
var Mover = function() {

    this.location = createVector(floor(random(width)), floor(random(height)));
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();
}

```

In the update function we are creating a mouse vector that will get the coordinates of the mouse on the canvas. We set the acceleration vector to a P5 vector which is a static reference to sub() and set it to the mouse and location. Then multiply it by 0.2. 

We then take the velocity and add the current acceleration, limit the velocity to 10 and take the location and add the current velocity to it.

```js
    this.update = function() {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

```

In the display function we give the object a stroke and fill, then we make it an ellipse and draw it at the new location vector points.

```js
    this.display = function() {
        stroke(150);
        strokeWeight(2);
        fill(255, 0, 0);

        ellipse(this.location.x, this.location.y, 40, 40);
    }

```

We then make a checkEdges function which makes the ball bounce off the walls and stops it from going off the canvas.

```js
    this.checkEdges = function() {
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

```
