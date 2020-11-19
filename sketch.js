
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
 ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2  
}


function draw() {
background(180);
ground.x=ground.width/2  
 
  
  
  
monkey.collide(ground)
 
  
  
  
  banana();
  object();
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :" +survivalTime,100,50);
  
  
  drawSprites();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
}
function banana() {
   if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.5
   
}
}
function object() {
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addImage( obstaceImage)
   object.scale=0.5  
}}



