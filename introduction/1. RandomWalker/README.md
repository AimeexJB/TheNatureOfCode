# TheNatureOfCode - Random Walker

In these files we cover the 4 files wint the Random Walker class.

## RandomWalker - with 4 outcomes

In this program, we delare the walker object and have it move randomly around the canvas in 4 directions.

After we declare the object we write the functions setup() and draw(). The setup() function sets up the canvas and also tells us what type of object walker is so we can then call the class. The draw() function is then called and occurs every frame, it also calls the render() and step() functions.

```js

var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

function draw () { 
    walker.render(); 
    walker.step(); 
} 
```

In the walker class we set up the x & y variables. 
We then set up the render() function. It draws the dot at the x & y coordinates that are set above it.

```js

    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x, this.y);
    }
```

After the rende() function comes the step() function. This makes a random number between 0 & 4 and then floors it, this means it removes the decimal so that the max number will be 3 and the min will be 0.
At the end of the code we use the constrain() function. This limits its x position and stops the walker from going off the edge of the canvas.

```js

    this.step = function() {
        var choice = floor(random(4)) 

        if (choice === 0) {
            this.x++;
        } else if (choice === 1){
            this.x--;
        } else if (choice === 2){
            this.y++;
        } else{
            this.y--;
        }

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```



## RandomWalker - with 9 outcomes

In this program, we delare the walker object and have it move randomly around the canvas in 9 directions.

We declare the walker object and write the setup() and draw() functions just as we did in the Random Walker with 4 outcomes code.

The x & y variables and the render() function are also the same as the other Random Walker code. The only change in this code is with th step() function.

In this code we ask for and x and y direction. We ask for a random number between -1 & 2 and then floor it. Which means it will be between 1 and 0. We then constrain it so that the walkerdoes not go off the canvas.

```js

this.step = function() {
        var stepx = floor(random(-1,2));
        var stepy = floor(random(-1,2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

```

