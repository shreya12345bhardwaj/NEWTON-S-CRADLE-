
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1 = new roof(width/2,height/4,400,20)
  bob3 = new bob(720,height/4+300,40);
  bob2 = new bob(998,height/4+300,40);
	bob1 = new bob(800,height/4+300,40);
  bob4 = new bob(870,height/4+300,40);
  bob5 = new bob(940,height/4+300,40);

  rope3 = new rope(bob3.body,roof1.body,-180,0);
  rope2 = new rope(bob2.body,roof1.body,142,0);
  rope1 = new rope(bob1.body,roof1.body,-100,0);
  rope4 = new rope(bob4.body,roof1.body,-20,0);
  rope5 = new rope(bob5.body,roof1.body,60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



