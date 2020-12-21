
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3
var paper


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	b1 = new Bin(1000,370,250,20)
	b2 = new Bin(860,310,20,170)
	b3 = new Bin(1140,300,20,170)
	paper = new Paper(200,350,40)
	ground = new Ground(600,height,1200,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}


