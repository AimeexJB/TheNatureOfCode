# TheNatureOfCode - Apply Forces

A force is a vector that causes an object with a mass to accelerate. In this example we are taking a mover and applying the force wind to it.

We create 2 files, Mover.js and Sketch.js

## Mover

In the mover file we have the mover class. We create vectors for location, velocity and acceleration and then update them using the update function.

We then display the mover on the screen as an ellipse and use the checkEdges function to make it bounce off the walls and not go off the screen.

```js
var Mover = function() {

    this.location = createVector(30,30);
    this.velocity = createVector(3,0);
    this.acceleration = createVector(0,0);

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    this.display = function() {
        fill(125,0,253);
        stroke(150);
        strokeWeight(2);
        ellipse(this.location.x, this.location.y, 30, 30);
    }

    this.checkEdges = function() {
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}

```

After the checkEdges function we add the new function called applyForce. This will apply a force to the mover object as it goes across the screen.

```js
    this.applyForce = function(force) {
        this.acceleration = force;
    }
```

## Sketch

In the sketch file we declare the mover variable and create it on the setup function along with the canvas.

Then in the draw function we create the wind vector and give it x and y variables. We then apply the wind force to the mover as it goes across the screen.

```js
var mover;

function setup() {
    createCanvas(640, 640);
    mover = new Mover();
}

function draw() {
    background(255);

    var wind = createVector(0.1, 0,01);

    mover.applyForce(wind);

    mover.display();
    mover.update();
    mover.checkEdges();
}

```

