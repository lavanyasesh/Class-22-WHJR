const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    var object_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1

    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

    ball= Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(object.position.x,object.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,20,20);
}
