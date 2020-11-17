const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground (500,400,400,10);
    box1 = new Box (500,405,50,50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  platform1.display();
  box1.display();
  drawSprites();
}
