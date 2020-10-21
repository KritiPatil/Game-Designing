const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plant, human;
var animal, weather;
var score;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  plant = new Players(200, 200, 50, 50);
  plant.shapeColor = "pink";
  /*
  - The plant grows a little bit every day
  - it could start as a tiny plant and then the next day you could have flowers in your plant
  */
  human = new Players(400, 200, 50, 50);
  /*
  - The human has to vist the plant every day to see how its growing
  - Human has to be aware of what might kill the plant.
  */

  animal = new NonPlayers(300, 400, 50, 50);
  /*
  -The animal will attack at random times, which happens sometimes
  */
  weather = new NonPlayers(200, 10, 800, 15);
  /*
  -The weather will change frequently as the weather is changing dracticlly nowadays
  */

  if(human.pos.x===325 || human.pos.x===275) {
    score = score + 10;
  }else if(human.pos.y===375 || human.pos.y===425) {
    score = score + 10;
  }

  if(animal.pos.x===325 || animal.pos.x===275) {
    score = score + 10;
  }else if(animal.pos.y===375 || animal.pos.y===425) {
    score = score + 10;
  }

  if(keyCode === LEFT_ARROW) {
    human.pos.x = human.pos.x + 10;
  }else if(keyCode === RIGHT_ARROW) {
    human.pos.x = human.pos.x - 10;
  }

  if(human.pos.x === 200 && human.pos.y === 200){
    text("Yay! You are taking care of your plant", 200, 30);
  }else if(animal.pos.x === 200 && animal.pos.y === 200) {
    text("Oh no! You aren't taking care of your plant" , 200, 30);
    text("Alert! Alert!", 200, 50);
  }
  
}

function draw() {
  background("black");
  Engine.update(engine);
  
  plant.display();
  human.display();

  animal.display();
  weather.display();

  text("Score : "+score, 50, 20);
  
  drawSprites();
}


//Look in the README.md