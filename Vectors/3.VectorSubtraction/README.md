# TheNatureOfCode - Vector Subtraction

With Vector Subtraction we are taking the x and y coordinates of 2 vectors and subtractng them to get a new x and y coordinate.

We make the setup function as normal. This draws out canvas.

```js

function setup() {
    createCanvas(640, 360);
}

```


In the draw function,we add a background colour and then we add 3 variables. With the mouse variable it has 2 values determined, mouseX and mouseY, by the postion of your mouse. The center variable positions a vectorin the middle of the canvas. Lastly, the vectorLine takes the mouse variable and subtracts it from the center variable to determine where it will be.

```js
    background(51);

    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width/2, height/2);
    var vectorLine = mouse.sub(center);

```

We are translating the line from (0,0) to the centre of the canvas, giving it a stroke and stroke weight.

```js

    translate(width/2, height/2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x,vectorLine.y);
    
```
