# TheNatureOfCode - Normalising Vectors

In this example we are Normalising vectors. This means that we can make the length of the vector a standard or fixed length. If we assume that the standard length of a vector is 1, If we Normalise a vector we are taking a vector of any length and changing that length to 1, making it a Unit Vector. This means that the vector will not change length no matter which way it is pointing.

We make a setup function like normal and use that to make the canvas.

```js
function setup() {
    createCanvas(640, 360);
}

```

In the draw function we declare our three variables mouse, center and vectorLine.

```js
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width/2, height/2);
    var vectorLine = mouse.sub(center);

```

We normalise our vectorLine and make it 1 unit in length. Then we multiply the normalised vector by 50 to make it visable on the canvas

```js
vectorLine.normalize(); 
vectorLine.mult(50);

```

We then translate the line from (0,0) to the centre of the canvas, giving it a stroke and stroke weight.

```js
    translate(width/2, height/2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x,vectorLine.y);

```
