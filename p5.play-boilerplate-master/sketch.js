var movingrect;
var fixedrect;










function setup() {

  createCanvas(1500,1000);
  movingrect=createSprite(324,0134, 100, 50);
  fixedrect=createSprite(600,400,50,100);
  movingrect.shapeColor="maroon";
  fixedrect.shapeColor="maroon";
}

function draw() {
  background(255);
  movingrect.y=mouseY;
  movingrect.x=mouseX;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect .y < movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="black";
    fixedrect.shapeColor="black";
}
else{
  movingrect.shapeColor="maroon";
  fixedrect.shapeColor="maroon";
}

  drawSprites();
}