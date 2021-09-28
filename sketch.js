//class23 - 33: Pirates Invasion GAME
//Developer: Ridhaan Prakash
//Topics: PhysicsEngine, Inheritence, JSON, API, functions, Arrays, Push()pop()

//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring variable to use for simulation
var userEngine, userWorld;
var canvas, angle, tower, ground, cannon;
var balls = [];
var boats = [];

var backgroundImage, towerImage, cannonExplosionSound;
//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  backgroundMusic = loadSound("./assets/background_music.mp3");
  waterSound = loadSound("./assets/cannon_water.mp3");
  pirateLaughSound = loadSound("./assets/pirate_laugh.mp3");
  cannonExplosion = loadSound("./assets/cannon_explosion.mp3");
  towerImage = loadImage("./assets/tower.png");
  boatSpritedata = loadJSON("assets/boat/boat.json");
  boatSpritesheet = loadImage("assets/boat/boat.png");
  brokenBoatSpritedata = loadJSON("assets/boat/broken_boat.json");
  brokenBoatSpritesheet = loadImage("assets/boat/broken_boat.png");
  waterSplashSpritedata = loadJSON("assets/water_splash/water_splash.json");
  waterSplashSpritesheet = loadImage("assets/water_splash/water_splash.png");

}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1200, 600);

  //creating simulation and storing it in associated variables
  userEngine = Engine.create();
  userWorld = userEngine.world;

  //object name = new Classname(constructor call)

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);

  angle = -PI / 4;
  cannon = new Cannon(180, 110, 100, 50, angle);

  /*
  //sample array
   var sample = [65, 324436, "AVANI", [555, 777], 34, 980, "uttara"];
   
   //push(): Add items to the end of an array
    //sample.push(999);
   
   //pop(): Remove an item from the end of an array 
  // sample.pop();
   
   //unshift(): Add items to the beginning of an array
   // sample.unshift(999);
   
   //shift(): Remove an item from the beginning of an array
    //sample.shift();
   
   console.log(sample);
   
   console.log("1 index of array SAMPLE: sample[1] : "+sample[1]);
   
   console.log("3 index of array SAMPLE: sample[3] : "+sample[3]);
   
   console.log("1 index of 3 index of array SAMPLE: sample[3][1] : "+sample[3][1]);
   
   console.log("0 index of 3 index of array SAMPLE: sample[3][0] : "+sample[3][0]);
   
   console.log("2 index of array SAMPLE : sample[2] " + sample[2]);*/
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() { 
  background(189);
  image(backgroundImage, 0, 0, width, height);

  //activating simulation
  Engine.update(userEngine); //Engine.render(userEngine)

  //display of ground using matter.js
  ground.display();
  tower.display();


  /*
   using a for loop over the ball array we’ll get all the
cannonballs from the balls array.
It allows us to call showCannonBalls() multiple times.
  */
  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);//balls[0],0
  }

  
  cannon.display();
}

/*
create a keyPressed() function and inside this function when a key is pressed,
we’ll create a new cannonball and push it in the balls
array

*/
function keyPressed() {
  if (keyCode == UP_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

/*
 because the cannonBall is stored in an array, we
can traverse through each element of an array using a for
loop.

Using this index we can access each element of the ball
array. For now, let us just write one line for
cannonBall.display() inside this function.
*/
function showCannonBalls(ballAtGivenIndex, givenIndex) {
  if (ballAtGivenIndex) {
      ballAtGivenIndex.display();

  }
}

/*
ball.length is the number of elements in an array; we are using ball.length -1, as we are
accessing the last ball from the array. The index of an array starts from 0, and the length
of the array will always be 1 more than the last index of the array. So to get the last
element we write length -1.

ex: ar=[100,200,300]
ar.length = 3
and to access 300 we need to write
ar[2] which is as good as ar[ar.length-1] (3-1 = 2)
*/

function keyReleased() {
  if (keyCode === 32 ) {
    cannonExplosionSound.play();
    balls[balls.length - 1].shoot();
  }
}
