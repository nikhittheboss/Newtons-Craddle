
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,400,50)

	bobO1 = new Bob(400,100)
	//bobO2 = new Bob(450,100)
	//bobO3 = new Bob(500,100)
	//bobO4 = new Bob(550,100)
	//bobO5 = new Bob(600,100)

	rope1 = new Rope(bobO1.body,roof.body,-100,0)
	//rope2 = new Rope(bobO2.body,roof.body)
	//rope3 = new Rope(bobO3.body,roof.body)
	//rope4 = new Rope(bobO4.body,roof.body)
	//rope5 = new Rope(bobO5.body,roof.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display()
  bobO1.display()
  bobO2.display()
  bobO3.display()
  bobO4.display()
  bobO5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}



