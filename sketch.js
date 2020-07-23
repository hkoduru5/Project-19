//Global Variables
var obstacleimg, rockGroup, bananaimg, bananaGroup, backgroundimg, backgroundd,playerimg,background, ground,monkey;
var score = 0;


function preload(){
  backgroundimg = loadImage("jungle.png");
  obstacleimg = loadImage("stone.png");
  bananaimg = loadImage("Banana.png");
  playerimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  
  
  

}


function setup() {
  createCanvas(400,400);
  
  backgroundd = createSprite(400,400);
  backgroundd.addImage = (backgroundimg);
  
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible = false;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running",playerimg);
  monkey.scale = 0.1
  
}


function draw(){
 background(255);
  
backgroundd.velocityX=-4;
  if (backgroundd.x < 0){
      backgroundd.x = backgroundd.width/2;
    }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")) {
    monkey.velocityY = -6;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  if(bananaGroup.isTouching(banana)) {
  score = score + 2
  bananaGroup.destroyEach();
  }
  
  switch(score) {
      
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
      break;
    default: break;
    
  }
  
  if(rockGroup.isTouching(monkey)) {
  player.scale=0.2;
  }
  drawSprites();
  time();
}

function food () {
  if (frameCount % 80 === 0) {
    var banana = createSprite(240,200);
    banana.y= Math.round(rand(120,200));
    
    banana.addImage(bananaimg);
    banana.scale= 0.05;
    
    banana.velocityX = -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
    
  }
}

function obstacle () {
  if (frameCount % 300 === 0) {
    var stone = createSprite(240,320);
    
    
    stone.addImage(obstacleimg);
    stone.scale= 0.15;
    
    stone.velocityX = -4;
    stone.lifetime = 100;
    rockGroup.add(stone);
  }
}

function time () {
 stroke("white");
 textSize(20);
 fill("white");
 text("Score: " + score, 100,50);

}
















