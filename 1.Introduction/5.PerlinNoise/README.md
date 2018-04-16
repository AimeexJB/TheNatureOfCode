# TheNatureOfCode - Perlin Noise

In these files we will see examples of Perlin Noise. Perlin Noise has a more organic appearance because it produces a naturally ordered and smooth sequence of random numbers. The ouput range of Perlin Noise is fixed and always returns a value between 0 and 1.

## One Dimensional 

In this code we see one ellipse moving around the screen randomely.
We set up the setup() function like normal. With the draw function we draw the black rectangle with 15% opacity every frame so that it creates a trail effect wih the ball, then set up the step and render functions.

```js

function draw() {
    fill(0, 15); 
    rect(0, 0, width, height);
    walker.step(); 
    walker.render(); 
}

```

Then we move to the walker function.
We set the x position so that it starts in the middle of the screen and then set an xOff so that it chooses a random number between 1 and 1000. in ome code, the xOff (x offset) can also be called time.

```js

this.x = width / 2; 
this.xOff = random(1000);

```

with the render function we draw the ellipse and add a fill with a 50% opacity.

```js

this.render = function () {
    noStroke();
    fill(255, 45, 0, 50);
    ellipse(this.x, 500, 40, 40);
}

```

We use the map function to scale the xOff. It also gets a noise value for the crrent moment in time and maps it between 0 and the width. We then increment the xOff by 0.005.

```js

this.step = function() {
    this.x = map(noise(this.xOff), 0, 1, 0, width); 
    this.xOff += 0.005
}

```


## One Dimensional , But Fancy

In this code we have many Elipses appearing around the screen and moving randomley.

We declare 2 variables, walkers and noOf walkers. Then in the setup() function we set noOfWalkers to 10 and set walkers to a array. Then we write an if statement for those walkers.

```js

var walkers;
var noOfWalkers;

function setup() {
    createCanvas(1200, 1000);
    noOfWalkers = 10;
    walkers = []; 
    for (i=0; i<noOfWalkers; i++) {
        walkers[i] = new Walker();
    }
    background(127);
}

```

We then set up another if statement in the draw function to set up the step and render functions with the array of walkers. We also give the fill a 15% opacity to give the trail effect.

```js

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    for (i=0; i<noOfWalkers; i++) {
        walkers[i].step(); 
        walkers[i].render(); 
    }
}

```

In the Walker function we create a vector, which stores 2 variables, for the position and also for the nOff so it gets a random number between 0 and 1000.

```js

this.position = createVector(width/2, height/2);
this.nOff = createVector(random(1000), random(1000));

```


```js

this.render = function () {
    noStroke();
    fill(255, 45, 0, 50);
    ellipse(this.position.x, this.position.y, map(noise(this.nOff.x), 0, 1, 20, 200), map(noise(this.nOff.x), 0, 1, 20, 200));
}

```

In the Step function we then scale the x and y positions using the map function

```js

this.step = function() {
    this.position.x = map(noise(this.nOff.x), 0, 1, 0 -200, width+200); 
    this.position.y = map(noise(this.nOff.y), 0, 1, 0 -200, height+200);
    this.nOff.add(0.005, 0.005)
}

```
















