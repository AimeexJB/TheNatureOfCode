# TheNatureOfCode - Normal Gausssian Distribution

Random Gaussian 68% of the time gives back a number between -1 and 1 with a mean of 0. The next 30% of the time gives back a number between -2 and 2

##Standard Deviation in Action



```js

function draw() {
    var xloc = randomGaussian(); and a standard deviation of 1
    console.log(xloc);

    var sd = 60; 
    var mean = width/2; 

    xloc = (xloc * sd) + mean; 

    fill(0, 10);
    noStroke();
    ellipse(xloc, height/2, 16, 16); 
}

```


##Standard Deviation in Action with 2 Dimensions
