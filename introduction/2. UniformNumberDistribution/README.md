# TheNatureOfCode - Uniform Number Distribution

This code shows a canvas filled with objects thare are randomly getting taller.

We first declare an empty array called randomCounts and a variable for the total amount of items.

```js

var randomCounts = []; 
var total = 20;

```

We then set up out functions setup() and draw(). 
In the setup function we draw the canvas and then create a loop that fills the array with 0's. 
Then in the draw() function the loop occurs each time and we redraw the background. we then choose a random number between the total and floor it so the answer will be between 0 & 19 and add it to the array.

```js
function draw() {
  background(127);
  var index = floor(random(total));
  randomCounts[index]++;

  ....

}

```

After that we setup a variable w which calculates the length of each bar.

```js

  var w = width/randomCounts.length;

```

It then loops 20 times, once for each bar, and creates a bar with a height based on the array value at the time.
