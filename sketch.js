const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(600, 380);
  box2 = new Box(600, 330);
  box3 = new Box(600, 280);
  box4 = new Box(600, 250);
  box5 = new Box(600, 200);
  box6 = new Box(600, 150);

  box7 = new Box(500, 380);
  box8 = new Box(500, 330);
  box9 = new Box(500, 280);
  box10 = new Box(500, 250);
  box11 = new Box(500, 200);

  ball = new Ball(350,100,50);

  sling1 = new Sling(ball.body,{x:350,y:50});
  
  ground = new Ground(200,390,1000,10);
}

function draw() {
  background(0)
  Engine.update(engine);  
  box6.display();
  box5.display();
  box4.display();
  box3.display();
  box2.display();
  box1.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  ball.display();

  sling1.display();
  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}