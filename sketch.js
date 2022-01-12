var numero = 5;
var nombre = "bruno";
var sprite
function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  sprite = createSprite(windowWidth/2,windowHeight/2,20,20);
  console.log(nombre+numero);
}

function draw(){
  background(255)
  if(sprite.y>100){
    sprite.shapeColor = "green"
  }
  else{
    sprite.shapeColor = "red"
  }
  for(var i = 0;i < 10; i + 1){
    console.log(nombre+numero);
  }
  sprite.velocityY = -5;
  drawSprites();
}