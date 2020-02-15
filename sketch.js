var fixedRect,movingRect,rect1;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(300, 200, 50, 80);
 movingRect = createSprite(400,200,80,50);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor = "yellow";

 rect1=createSprite(300,100,50,50);
 rect1.shapeColor="green";

}



function draw() {
  background(0);  
  movingRect.x = World.mouseX ;
  movingRect.y = World.mouseY;
  console.log (movingRect.x-fixedRect.x);

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor = "yellow";
  }
 
  drawSprites();

}

function isTouching(object1,object2){
  if(object2.x-object1.x<(object2.width/2+object1.width/2) &&
  object1.x-object2.x<(object2.width/2+object1.width/2)&&
  object2.y-object1.y<(object2.height/2+object1.height/2) &&
  object1.y-object2.y<(object2.height/2+object1.height/2)){
    return true;  
  }
  else{
   return false;
  }
    
}