
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var constraint1,constraint2,constraint3,constraint4,constraint5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(150,300)
    bob2 = new Bob(200,300)
	bob3 = new Bob(250,300)
	bob4 = new Bob(300,300)
	bob5 = new Bob(350,300)
    
	



	var options = {
		isStatic: true
	}

	roof = Bodies.rectangle(250,100,250,40,options)
	World.add(world,roof)

	constraint1 = new Constraint(bob1.body,{x: 150,y: 100})
	constraint2 = new Constraint(bob2.body,{x: 200,y: 100})
	constraint3 = new Constraint(bob3.body,{x: 250,y: 100})
	constraint4 = new Constraint(bob4.body,{x: 300,y: 100})
	constraint5 = new Constraint(bob5.body,{x: 350,y: 100})

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
	fill("pink") 

 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()

	fill("red")

 rectMode(CENTER)
 rect(roof.position.x,roof.position.y,250,40)
 constraint1.display()
 constraint2.display()
 constraint3.display()
 constraint4.display()
 constraint5.display()
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y:0})
	}
}

