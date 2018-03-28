# TheNatureOfCode - Acceleration

In this example we are learning abour acceleration which is the rate of change of velocity. We are going to do this in 3 examples

## Acceleration 1

Like in the last example, We declare the variable mover and then create it along with the canvas in the setup function. And in the draw function we set the background colour and also declare all the functions that are related to the mover object.

```js
var mover;

function setup() {
    createCanvas(640, 360);
    mover = new Mover();
}

function draw() {
    background(51);

    mover.update();
    mover.checkEdges();
    mover.display();
}

```

In the mover class we create vectors for the location, which is placed in the center of the canvas, and the velocity, which is a fixed x and y value. Then we create an acceleration vector which is also a fixed x and y decimal value.

We then create an update function which takes the velocity and adds the current acceleration, it then limits the velocity to 10, then takes the location and adds the current velocity.

```js
var Mover = function() {

    this.location = createVector(width /2, height /2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.03, 0.04);

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
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


## Acceleration 2

In the second example the only thing that has changed is that the acceleratio is given a random number and then is multiplied by a decimal number to keep it going.

```js
    this.location = createVector(width /2, height /2);
    this.velocity = createVector(0, 0);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(0.02);

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

```


## Acceleration Towards the mouse

In the third example, we are taking the mover object and making it move to wherever your mouse is on the canvas. The only pieces of code that have changed are as follows.

The location vector is still set to the middle of the canvas, The velocity vector is then set to a fixed value of (3,3) and the acceleration vector is then left blank.

```js
    this.location = createVector(width /2, height /2);
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();

```

In the update function we add a mouse vector that gets the coordinates of your mouse on the canvas. We set the acceleration vector to a P5 vector which is a static reference to sub() because we want a new PVector pointing from one point to another. We then multiply it by 0.2.


```js
    this.update = function() {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.mult(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

```


