var fixedRect,movingRect,fixedRect2;
function setup() {
  createCanvas(1200,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"
  fixedRect2=createSprite(1000,500,100,66);
  fixedRect2.shapeColor="green"
}
  

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(getPotatos(movingRect, fixedRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if(movingRect, fixedRect2)
  {
    movingRect.shapeColor="red";
    fixedRect2.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect2.shapeColor="green";
  }

  drawSprites();
}
function getPotatos(movingRect, fixedRect)
{
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
      fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
      movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
      fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
    return true;
   
  }
  else
  {
    return false;

  }
}

