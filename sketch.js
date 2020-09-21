
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var rect1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper();
   ground = new Ground();
   //create a dustbin.
   rect1 = new Dustbin(1450,670,200,200);
   

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
 background(0);
  
  //drawSprites();

 ground.display();
 rect1.display();
 paper.display();

 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1.5,y:-3});
	}
}

