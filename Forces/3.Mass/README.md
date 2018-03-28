# TheNatureOfCode - Mass

In this example we are seeing what effect mass has on the speed of a moving object. The higher the mass, the slower the speed. The lower the mass, the faster the object.

## Mover

For this example we are only changing the mover class.

we declare the variable mass, set it to m and add it into the function.

```js
var Mover = function(m) {

    this.location = createVector(30,30);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.mass = m;

}

```

In the display function we can change the size of the object by multiplying th mas by a number, in this case it is a large object.

```js
 ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);

```

The last thing we do in this example is use a static P5.Vector function to calculate the acceleration by dividing the force by the mass this makes the smaller objects fall faster.

```js
    this.applyForce = function(force) {
        var f = p5.Vector.div(force,this.mass);
        this.acceleration.add(f);
    }

```

