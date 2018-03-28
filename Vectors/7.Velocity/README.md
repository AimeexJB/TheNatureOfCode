# TheNatureOfCode - Velocity

In this example we are learning about motion. We are going to add velocity to a location and then draw the object at the location. To do this we are creating a mover class.

We declare the variable mover and then create it along with the canvas in the setup function.

```js
var mover;

function setup() {
    createCanvas(640, 360);
    mover = new Mover();
}

```

In the draw function we set the background colour and also declare all the functions that are related to the mover object.

```js
function draw() {
    background(51);

    mover.update();
    mover.checkEdges();
    mover.display();
}


```

In the mover class we create vectors for the location, which has a random with and height, and the velocity, which is a fixed x and y value. We then create an update function which adds the location to the velocity.

```js
var Mover = function() {

    this.location = createVector(random(width), random(height));
    this.velocity = createVector(10, 5);

    this.update = function() {
        this.location.add(this.velocity);
    }
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
