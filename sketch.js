var seaImg;
var shipImg;
var ship;
var sea;
function preload(){
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(700,500);
   sea=createSprite(200,200,200,200);
   sea.addImage(seaImg);
   sea.scale=0.5;
   sea.x=sea.width/5;

  ship=createSprite(200,200,200,100);
  ship.addAnimation("abc",shipImg);
  ship.scale=0.3;
}

function draw() {
  background("blue");
  sea.velocityX=-5;
  if(sea.x<0){
    sea.x=sea.width/5;
  }
  drawSprites();
}