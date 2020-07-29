var gee,ge




function setup() {
  createCanvas(800,400);
  ge=createSprite(300,200,40,90)
  gee=createSprite(400, 200, 50, 50);
 ge.shapeColor="blue";
 gee.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  ge.y=World.mouseY;
  ge.x=World.mouseX;

  if(ge.x-gee.x < ge.width/2 +gee.width/2 &&
    gee.x-ge.x < ge.width/2 +gee.width/2 &&
    gee.y-ge.y < ge.height/2 +gee.height/2 &&
    ge.y-gee.y < ge.height/2 +gee.height/2 ){
      ge.shapeColor="pink"
      gee.shapeColor="pink"
   



  }
  else{
  ge.shapeColor="blue";
  gee.shapeColor="red";}


  drawSprites();
}