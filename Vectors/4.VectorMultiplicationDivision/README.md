# TheNatureOfCode - Vector Multiplication & Division

When multiplying a vector what we are doing is scaling it. If we wanted to scale the vector by twice its size or half its size, and leaving it in the same direction, we would use the mult() function.

First of all, we setup the canvas. 

```js

function setup() {
    createCanvas(640, 360);
}

```

Then in the draw function we set the background colour and we create a vector called mouse, which is a vector with the position of the mouse. A vector called center, which determines the of the canvas. And a vectorLine vector which takes the mouse variable and subtracts it from the center variable to determine where it will be.

```js
background(51);

var mouse = createVector(mouseX, mouseY);
var center = createVector(width/2, height/2);
var vectorLine = mouse.sub(center);
    
```
From there we use the mult() function and we half the line.

```js

vectorLine.mult(0.5); 
    
```

We then translate the line from (0,0) to the centre of the canvas, giving it a stroke and stroke weight.

```js

translate(width/2, height/2); 
strokeWeight(2);
stroke(255);
line(0, 0, vectorLine.x,vectorLine.y);

```