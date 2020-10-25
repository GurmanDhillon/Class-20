var fixed, moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 100, 100);
  fixed.shapeColor = "red";
  moving = createSprite(600,200,100,100);
  moving.shapeColor = "blue"; 
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
 if (moving.x-fixed.x <moving.width/2+fixed.width/2 
    && fixed.x-moving.x <moving.width/2+fixed.width/2
    && moving.y-fixed.y <moving.height/2+fixed.height/2 
    && fixed.y-moving.y <moving.height/2+fixed.height/2){
    fixed.shapeColor="green"; 
    moving.shapeColor="green";
    
    }
else{
  fixed.shapeColor="red"; 
  moving.shapeColor="blue";
}
  drawSprites();
}