const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plant, human;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  fill ("black");
  plant = new Character(200, 200, 100, 50);
  /*
  - The plant grows a little bit every day
  - it could start as a tiny plant and then the next day you could have flowers in your plant
  */
  human = new Character(400, 200, 100, 50);
  /*
  - The human has to vist the plant every day to see how its growing
  - Human has to be aware of what might kill the plant.
  */
}

function draw() {
  background("black");
  Engine.update(engine);
  
  plant.display();
  human.display();
  
  drawSprites();
}


//Look in the README.md