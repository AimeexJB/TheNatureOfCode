# TheNatureOfCode - Probability & Non Uniform Distribution

Like the other Random Walker this displays a Walker object and draws it on a Canvas. The setup and render() function stay the same. The only change is within the step() function.

## Random Walker 3

With this walker there is more of a probability getting one number over another.

```js

this.step = function() {
        var probArray =[];
        probArray[1] = 1;
        probArray[2] = 2;
        probArray[3] = 3;
        probArray[4] = 4;
        probArray[5] = 5;

        var index = floor(random(probArray.length));
        var r = probArray[index];

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    }

```

## Random Walker 4

With this walker it is  random setup with a level of probability. 

```js

this.step = function() {
        var choice = floor(random(4));
        var r = random(1);

        if (r < 0.4) {
            this.x++
        } else if (r < 0.6){
            this.x--;
        } else if (r < 0.8){
            this.y++;
        } else{
            this.y--;
        }

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    }

```



