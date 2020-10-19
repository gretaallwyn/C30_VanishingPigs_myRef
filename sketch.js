const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,20);
    platform = new Ground(150,505, 300, 170);

    
    box1 = new Box(700,550,70,70);
    box2 = new Box(800,550,70,70);
    pig1 = new Pig(770, 550);
    log1 = new Log(750,500,200, PI/2);

    box3 = new Box(700,470,70,70);
    box4 = new Box(800,470,70,70);
    pig3 = new Pig(770, 470);

    log3 =  new Log(750,420,200, PI/2);

    box5 = new Box(750,380,70,70);
    log4 = new Log(730,350,100, PI/7);
    log5 = new Log(800,350,100, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    

    text(mouseX + "," + mouseY, mouseX, mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}