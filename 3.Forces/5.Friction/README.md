# TheNatureOfCode - Friction

In this example we are adding a new force, Friction. This causes moving object to slow down to a stop whn it is applied.

## Mover

In the mover class the only thing  we change is the location vector to give it a random width and height on the screen.

```js

    this.location = createVector(Math.floor(random(width)), Math.floor(random(height))); 
    this.velocity = createVector(2, 2); 
    this.acceleration = createVector(0, 0);
    this.mass = m;

```


## Sketch

In the sketch file, we add another variable called noOfMovers and set that to 10. We then create a loop for those movers and use the math.random function to give the movers a random mass.

```js
var movers = [];
var noOfMovers = 10;

function setup() {
    createCanvas(600,600);
    for(var i=0; i<noOfMovers; i++) {
        movers[i] = new Mover(Math.floor(random(10, 50))); 
    }
    
}

```

In the draw function we multiply the mass of the movers to the vector variables to create gravity. 

We then add a new variable, c, which is the coefficient of friction and another variable, n, which is the reactive force. We then add 2 more variables frictionMag, which takes the coefficient and multiplies it by the reactive force to creat the friction magnitude, and friction, which is a static p5 vector function.

After that we normalise the friction vector then multiply it by the frictionMag. Then we apply the force, update and display the movers.

```js
    for(var i=0; i<noOfMovers; i++) {
        var wind = createVector(0.8,0);
        var gravity = createVector(0,0.1 * movers[i].mass); 

        var c = 0.5; 
        var normal = 1;
        var frictionMag = c * normal; 
        var friction = p5.Vector.mult(movers[i].velocity, -1);

        friction.normalize(); 
        friction.mult(frictionMag);

        movers[i].applyForce(friction);

        movers[i].checkEdges();
        movers[i].update(); 
        movers[i].display(); 
    }


```

