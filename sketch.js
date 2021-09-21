const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var tower,ground,cannon,cannonBall;
var engine, world;

function preload(){
    bgd = loadImage("/assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    angle = -PI/4

    tower = new Tower(150, 350, 160, 310);
    ground = new Ground(600,580,1200,20)
    cannon = new Cannon(180, 110, 100, 50, angle);
    cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw(){
    background(220);
    image(bgd,600,300,1200,600);
    
    Engine.update(engine);
   
    tower.display();
    cannon.display();
    cannonBall.display();
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
        cannonBall.shoot();
        console.log("Down Key pressed");
    }
   
}
