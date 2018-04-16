# TheNatureOfCode - Normal Gausssian Distribution

Random Gaussian 68% of the time gives back a number between -1 and 1 with a mean of 0. The next 30% of the time gives back a number between -2 and 2

##Standard Deviation in Action

In this code we see ellipse's appearing randomely along a horizontal line. With 68% of them appearing in the middle, 30% of them appearing further out and very few appearing closer to the edge.

In this code we set up the canvas and background in the setup() function.

Then in the draw() function we set the variable xloc to get a random gaussian number with a mean of 0 and a standard deviation of 1 and the console the result to see what it is.

```js

var xloc = randomGaussian(); 
console.log(xloc);

```

Next, we define a standard deviation as well as set the mean value to the middle of the screen

```

var sd = 60; 
var mean = width/2; 

```

We then scale the random gaussian number we got earlier by multiplying it by the standard deviation and adding the mean. 

```js

xloc = (xloc * sd) + mean; 

```

Then we draw our ellipse.

```js

fill(0, 10);
noStroke();
ellipse(xloc, height/2, 16, 16);

```


##Standard Deviation in Action with 2 Dimensions

This code is very similar to the code above but instead of the ellipses appearing in a line, they appear all around the screen in more of an oval shape.

In the draw() function , along with the xloc variable, we set up a yloc variable. This gets a random gaussian number along the y axis. We also define a standard deviation and mean for the y axis.

```js

var xloc = randomGaussian(); 
var yloc = randomGaussian();

var xsd = 100; 
var ysd = 40; 

var xMean = width/2; 
var yMean = height/2;

```

We then scale both the xloc and yloc by the standard deviation and adding the mean. And then we draw the ellipse

```js

xloc = (xloc * xsd) + xMean; 
yloc = (yloc * ysd) + yMean;

```











