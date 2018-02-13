# TheNatureOfCode - Pixel Arrays 

## Example 1

In this example we create one pixel at the top of the canvas to show that we are able to manipulate each pixel in the canvas.

We create the setup() function as usual except we add a pixel density to make it compatible with all screens.

```js

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
    background(51);
}

```

In the draw function we start off with the loadPixels() funtion, this loads the pixels into the canvas. We then locate the Red value of the pixel by multiplying th Y value by the width, adding the X and multiplying the answer by 4. (X+Y*Width)*4. 

The first 3 values in the pixel array stand for the R, G and B of the first pixel and the A stands for the opacity.

We then end the function by updating the pixels so they take on the values provided.

```js

function draw() {
    loadPixels(); 

    var index = (2+2*5)*4 
    pixels[index + 0] = 255; 
    pixels[index + 1] = 0; 
    pixels[index + 2] = 0; 
    pixels[index + 3] = 255; 

    updatePixels(); 
}

```

## Example 2

In this second example we make the whole canvas red.

We create the setup() function as usual, adding the pixel density in to make it compatible with all screens.

In the draw function we first load the pixels in. 
Then we write a for loop and first loop through each Y value. Then for each Y value we start looping through each X value. Then we calculate the index using the formula, (X+Y*width)*4, and change each array value.
We then end the function by updating the pixels.

```js

for (var y=0; y<height; y++) { 
    for (var x=0; x<width; x++) { 
        var index = (x + y * width) * 4 
        pixels[index + 0] = 255; 
        pixels[index + 1] = 0; 
        pixels[index + 2] = 0; 
        pixels[index + 3] = 255; 
    }
}

```

## Example 3

In this example we create a gradient type effect with 4 colours.

The only code we change is that we make the first pixel and x value and the hird pixel a y value.

```js

for (var y=0; y<height; y++) { 
    for (var x=0; x<width; x++) { 
        var index = (x + y * width) * 4 
        pixels[index + 0] = x;
        pixels[index + 1] = 0; 
        pixels[index + 2] = y; 
        pixels[index + 3] = 255; 
    }
}

```

## Example 4

In this example we create a noise type of effect on the canvas.

We do this by adding randomness to the if statement. We create a variable called bright and set it so that is chooses a random number between 0 and 255. Then we add this to the first 2 pixels of the array.

```js

for (var y=0; y<height; y++) { 
    for (var x=0; x<width; x++) { 
        var index = (x + y * width) * 4 
        var bright = random(255); 
        pixels[index + 0] = bright; 
        pixels[index + 1] = bright; 
        pixels[index + 2] = bright; 
        pixels[index + 3] = 255; 
    }
}

```

## Example 5 - 2D Noise

In this example we add 2D noise for a smoother approach. This creates a cloud like effect on the canvas.

We set a value for the yOff, which is a moment in time, by a certain amount. We then set up the setup() function with a pixel density and noise detail.

```js

var yOff = 1000.0;

function setup() {
    frameRate(1);
    createCanvas(400, 400);
    pixelDensity(1); 
    noiseDetail(10);
    background(51);
}

```

After looping through the Y values we set a variable for the xOff and then we loop through the X values and locate the Red value of the pixel.

We create a variable called bright and now we get a noise value for the moment in time and we map it to a value.

We then increment the xOff and yOff values. The smaller the number the smoother the difference between the values

```js

for (var y=0; y<height; y++) { 
    var xOff = 100.0;

    for (var x=0; x<width; x++) { 

        var index = (x + y * width) * 4 pixel with this (X+Y*Width)*4
        var bright = map(noise(xOff, yOff), 0, 1, 0, 255); 

        pixels[index + 0] = bright; 
        pixels[index + 1] = bright; 
        pixels[index + 2] = bright; 
        pixels[index + 3] = 255; 

        xOff += 0.02;
    }
    yOff += 0.02
}

```

At the end we then update the pixels to have them load into the canvas.




