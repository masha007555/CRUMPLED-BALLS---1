const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg;
var trash1;
var world;
var ground;

function preload(){

}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70);
	ground = new Ground(width/2,620,width,20);
	dustbin1 = new Dustbin(1200,540,20,100);
	dustbin2 = new Dustbin(1000,540,20,100);
	dustbin3  =new Dustbin(1100,600,219,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();


}


function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:264,y:-264})
}
}