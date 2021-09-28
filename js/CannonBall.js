class CannonBall {
  constructor(xInput, yInput) {
    var options = {
      isStatic: true,
    };
    this.radius = 30;
    this.speed = 0.05;
    this.body = Bodies.circle(xInput, yInput, this.radius, options);
    this.ballImage = loadImage("./assets/cannonball.png");
    this.animation = [this.ballImage];
    this.trajectory = [];

    World.add(userWorld, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length); //length is quantity of the balls

/*
The function translates (shift) the origin to the points given
inside the brackets.
In our case, we want to shift the origin to the position of the
cannon; so we need to pass this.x and this.y in the
translate() function.
But this should be enclosed between the push() and pop()
function otherwise we will shift the origin for all the bodies
and we do not want that to happen.
There is one more important concept which we have to be
aware of since we are shifting the origin to the position of
the cannon then to create the cannon we will only give x
and y as 0,0.
Because the origin itself came at the position of the
cannon and we want to create the cannon there only.
*/



    push();
    translate(pos.x, pos.y); //translate makes object stable and accurate;
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, 0, this.radius, this.radius);

    pop();
  }

/*
create a function called shoot() in the
cannonBall.js file where we’ll set the velocity to the
cannonball.
When we created the cannonball we set its isStatic to true,
this will keep the ball stationary.
In order to shoot the ball first we need to set this flag to
false. But we only want this when the user releases the
button to shoot.
For this we will use a function from the matter.js library this
is called as Matter.Body.setStatic(this.body,false)



This will enable us to move our ball.
Now we are going to set the velocity(speed) of the
cannonball.
Matter.min.js library has a function that will help us to set
some velocity to the cannonball. The function is called 
Matter.Body.setVelocity(this.body, {
  x: velocityX , y : velocityY}). 

This function takes the body to which we want to give
velocity.
And the x & y velocity value as the parameters.
x value is 30 which will make the ball move in the right
direction and the y value is -20 which means the ball will
move downwards. When both of these are values applied
together like we are doing here then the ball will move in
the right direction and then keep on falling down.

Our shoot() function is defined now, we’ll call this function
on the key release.

*/
shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});  
  }
}
/* mult() function used here will multiply the values stored in var velocity with 0.5
 as the initial values that we are getting from the vector are low.
 . So by multiplying the value we are increasing the velocity to give good speed to cannonballs.
*/