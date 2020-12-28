const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;

var umbrella;
var drops = [];
var all_lightning;
var l1,l2,l3,l4;
var thunder,thunderCreatedFrame = 0;

function preload(){
    
    l1 = loadImage("images/1.png");
    l2 = loadImage("images/2.png");
    l3 = loadImage("images/3.png");
    l4 = loadImage("images/4.png");

}

function setup(){
   
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250,550);
    
}

function draw(){
    
    background("black");
    drawSprites();

    Engine.update(engine);

    umbrella.display();
    
    for(var i=0; i<2; i++){
        drops.push(new Drop(random(0,500),random(-100,10)));
    }

    for(var i=0; i<drops.length; i++){
        drops[i].display();
    }

    var rand = Math.round(random(1,4)); 
    if(frameCount % 80 === 0){ 
        thunderCreatedFrame = frameCount; 
        thunder = createSprite(random(10,370), random(10,30), 10, 10); 
        switch(rand){ 
            case 1: thunder.addImage(l1); 
            break; 
            case 2: thunder.addImage(l2); 
            break; 
            case 3: thunder.addImage(l3); 
            break; 
            case 4: thunder.addImage(l4); 
            break; 
            default: break; 
        } 
        thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame + 5 === frameCount && thunder){ 
        thunder.destroy();
    }

}   

