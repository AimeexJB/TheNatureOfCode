# TheNatureOfCode - Vector Magnitude

With multiplication and Division we can change the length of the vector without changing its direction. With vector Magnitude we will be able to calculate the length of the vector by using the Pythagorean theorem.

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

We then create a new variable called m which is equal to the magnitude or length of the vectorLine. We then give it a fill and stroke, then make it a rectangle and place it on the top of the canvas. This rectangle will show the length of the vectorLine as it changes on the canvas.

```js
    var m = vectorLine.mag();
    fill(255); 
    stroke(0);
    rect(0, 0, m, 10);

```

We then translate the line from (0,0) to the centre of the canvas, giving it a stroke and stroke weight.

```js
    translate(width/2, height/2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x,vectorLine.y);

```




