# TheNatureOfCode - Gravity on Earth

In this example we are showing the effect of gravity on multiple mover objects with different masses.

## Sketch

For this example we are only changing the sketch.js file.

We first declare the movers as an empty array and then in the setup function we use a for loop to create all of the movers, making their mass a random number between 5 and 20 each time, along with creating the canvas. 

```js
var mover = [];

function setup() {
    createCanvas(640, 640);
    for (var i = 0; i < 20; i++) {
        mover[i] = new Mover(Math.floor(random(5, 20)));
    }
}

```

We then use another for loop to add the mass, forces, display and update the movers for each time they are drawn.

```js
function draw() {
    background(255);

    for (var i = 0; i < 20; i++) {
        var m = mover[i].mass;

        var wind = createVector(0.1, 0.0);
        var gravity = createVector(0, 0.1 * m);

        mover[i].applyForce(wind);
        mover[i].applyForce(gravity);

        mover[i].display();
        mover[i].update();
        mover[i].checkEdges();
    }
}

```
