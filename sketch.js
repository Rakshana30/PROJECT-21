var bullet1,bullet2,bullet3,bullet4;
var speed,weight,thickness;
var border1,border2,border3;
var wall1,wall2,wall3,wall4;
//var object1,object2;

var damage,hasCollided;

function setup() {
  createCanvas(1600,400);
speed = random(50,45);
weight = random(400,1500);
thickness = random(22,83);

border1 = createSprite(100,100,3000,10);
border1.shapeColor = "white"; 

border2 = createSprite(200,200,3000,10);
border2.shapeColor = "white"; 

border3 = createSprite(300,300,3000,10);
border3.shapeColor = "white"; 

wall1 = createSprite(1570,50,20,60);
wall1.shapeColor = color(70,70,70);

wall2 = createSprite(1570,150,20,60);
wall2.shapeColor = color(70,70,70);

wall3 = createSprite(1570,250,20,60)
wall3.shapeColor = color(70,70,70);

wall4 = createSprite(1570,350,20,60);
wall4.shapeColor = color(70,70,70);

bullet1 = createSprite(30,50,20,20);  
bullet1.shapeColor = "white";

bullet2 = createSprite(30,150,20,20);
bullet2.shapeColor = "white";

bullet3 = createSprite(30,250,20,20);
bullet3.shapeColor = "white";

bullet4 = createSprite(30,350,20,20);
bullet4.shapeColor = "white";


}

function draw() {
  background(0,0,0);  
  
  //hasCollided();
  

  bullet1.velocityX = speed;  
  bullet2.velocityX = speed; 
  bullet3.velocityX = speed;  
  bullet4.velocityX = speed;  
  
if (bullet1.x - wall1.x < wall1.width/2 + bullet1.width/2
  && wall1.x - bullet1.x < bullet1.width/2 + wall1.width/2
  && wall1.y - bullet1.y < bullet1.height/2 + wall1.height/2
  && bullet1.y - wall1.y < wall1.height/2 + bullet1.height/2){
    bullet1.velocityX = 0;
    bullet1.shapeColor = color(255,0,0);
  }  
  
if (bullet2.x - wall2.x < wall2.width/2 + bullet2.width/2
    && wall2.x - bullet2.x < wall2.width/2 + bullet2.width/2
    && bullet2.y - wall2.y < wall2.height/2 + bullet2.height/2
    && wall2.y - bullet2.y < wall2.height/2 + bullet2.height/2) {
      bullet2.velocityX = 0; 
      bullet2.shapeColor = color(0,255,0);
    }
  
if (bullet3.x - wall3.x < wall3.width/2 + bullet3.width/2
      && wall3.x - bullet3.x < wall3.width/2 + bullet3.width/2
      && bullet3.y - wall3.y < wall3.height/2 + bullet3.height/2
      && wall3.y - bullet3.y < wall3.height/2 + bullet3.height/2){
        bullet3.velocityX = 0;
        bullet3.shapeColor = color(230,230,0);
      }
  
if (bullet4.x - wall4.x < wall4.width/2 + bullet4.width/2
        && wall4.x - bullet4.x < wall4.width/2 + bullet4.width/2
        && bullet4.y - wall4.y < wall4.height/2 + bullet4.height/2
        && wall4.y - bullet4.y < wall4.height/2 + bullet4.height/2){
          bullet4.velocityX = 0;
          bullet4.shapeColor = color(255,100,0);
        }
        drawSprites();
      }

      //function hasCollided(){
    
       // bullet1RightEdge = bullet1.x + bullet1.width;
        //wallL1eftEdge = wall1.x;
    
        //if(bullet1RightEdge >=wall1LeftEdge){
          //return true;
        //}
      //if(hasCollided(bullet1,wall1)){
        // bullet1.velocityX = 0;
        // var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
         
      //if(damage>10){
        //wall1.shapeColor = color(255,0,0);
          //}
      //if(damage<10){
        //wall1.shapecolor = color(0,255,0);
      //}
        //}
      //}
  
        








