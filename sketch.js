const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;


  ground =new Ground(400,680,800,20);
  leftSide = new Dustbin(550,620,20,100);
  rightSide = new Dustbin(670,620,20,100);
  paper = new Paper(100,60,10);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  leftSide.show();
  rightSide.show();
  paper.show();
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.pos,{x:14 , y:-14})
  }
}