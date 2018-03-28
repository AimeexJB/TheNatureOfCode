# TheNatureOfCode - Vectors

A Vector is a line, typically drawn as an arrow, from a point, with a particular length. It is also another way to store 2 variables, an x and y value.

## Example 1

In the first example we see the ball vector moving horizontally across the screen.
We first declare the x and y variables for the location of the vactor along with a variable for the speed of the ball and thn setup the canvas


```js

var x = 320;
var y = 180;

var xspeed = 2;

function setup() {
    createCanvas(640, 360);
}

```

From there, we set up the draw function. Here we declare the background colour and then add the speed to the x position.

```js
function draw() {

    background(51);

    x = x + xspeed;

}

```

After that we write an if statement that stops the ball from going of the canvas.

```js

if ((x > width) || (x < 0)) {
        xspeed = xspeed * -1;
    }

```

We then display the ball vector by adding a stroke, stroke weight, fill and ellipse shape.

##Example 2

In this example we see he ball vector moving around the screen at a speed. We add another variable for the y speed. We vary the speeds for the x and y directions so the ball does not move in a 45degree angle.

```js

var xspeed = 2.5;
var yspeed = 2;

```

Like before, in the draw function, we then add the speeds to the x and y positions and add an if statement so the ball doesnt hit against the walls of the canvas.

```js

y = y + yspeed;

if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
}

```


##Example 3

In this example we swap out the x and y variables for a position variable and the speed variable for a velocity variable.

Then in the setup function we create our vector, by passing in 2 objects, for position and we set the vector speed.

```js

position = createVector(100, 100);
velocity = createVector(2, 2);

```

In the draw function we add the speeds to the x and y positions like before. Instead of writing the simple code x = x + xspeed; and y = y + yspeed; we write a more advanced version.

```js

position.x = position.x + velocity.x; 
position.y = position.y + velocity.y;

```

Then when stopping the ball from going off the canvas we replace the speed variables and position variables as well.

```js

if ((position.x > width) || (position.x < 0)) {
        velocity.x = velocity.x * -1;
}
if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
}

```


