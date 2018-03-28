# TheNatureOfCode - Vector Addition

In this code we are adding 2 vectors together. To add these vectors we simply add both x's and y's together.

It is basically the same as the last example. We are only changing two lines of code. 

We are changing these lines

```js

position.x = position.x + velocity.x; 
position.y = position.y + velocity.y;

```

to this

```js

position.add(velocity);

```

So what we are doing is taking the vector position and adding the velocity to it in 1 simple equation instead of 2.