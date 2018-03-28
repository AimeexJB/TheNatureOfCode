# TheNatureOfCode - Force Accumulation

In this example we are adding multiple forces, wing and gravity, to the mover.

## Mover

In the mover class the only line we add is 'this.acceleration.mult(0)' this resets the acceleration to 0 for each force in the update function.

```js
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

```


## Sketch

In the sketch file we add out second force which is gravity. We do this by making it a vector and giving that vector x and y variables that simulate what gravity is. We then apply that force to the mover.

```js
    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.01);

    mover.applyForce(wind);
    mover.applyForce(gravity);

```
