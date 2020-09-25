const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }
//creating ground 
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

//Tunning cookies 
    var kookie = {
        restitution:2
    } 

//creating falling object 
    cookies = Bodies.circle(200,200,6,kookie);
    World.add(world,cookies);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
//Rectangle 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

//Circle
    ellipseMode(RADIUS); 
    ellipse(cookies.position.x,cookies.position.y,6);

}