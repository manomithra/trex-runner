const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var topWall,bottomWall,leftWall,rightWall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

 topWall=new Ground(200,10,400,20);
 bottomWall=new Ground(200,380,400,20);
 leftWall=new Ground(10,200,20,400);
 rightWall=new Ground(385,200,20,400);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("yellow");
  Engine.update(engine);
  topWall.show();
  bottomWall.show();
  leftWall.show();
  rightWall.show();

}

