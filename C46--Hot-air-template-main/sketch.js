var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleBird

function preload(){
bgImg = loadImage("assets/bg.png")
obstacleBird = loadImage("assets/obsTop2.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
//making the hot air balloon jump
if(keyDown("space")) {
balloon.velocityY = -6 ;
            
}
if (keyDown("RIGHT_ARROW")) {
balloon.velocityX = 3
}
if (keyDown("LEFT_ARROW")) {
balloon.velocityX = -3
}

//adding gravity
balloon.velocityY = balloon.velocityY+2;
   
spawnObstacles();




drawSprites();
        
}

function spawnObstacles() {
if (frameCount% 50==0) {
var obstacle = createSprite(width, 100, 20, 20)
obstacle.velocityX = -3
obstacle.addImage(obstacleBird)
obstacle.scale=0.1

obstacle.y = random(20, 100)
}
}