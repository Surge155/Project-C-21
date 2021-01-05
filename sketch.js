var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  //Bullet
  bullet = createSprite(50,200,30,10);

  //Wall
  wall = createSprite(600,200,thickness,height/2);

  //Thickness
  thickness = random(22,83);

  //Speed And Weight
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(0);  
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/225089;
    if(damage > 10)
    {
      bullet.shapeColor = "red";
    }
    if(damage < 10)
    {
      bullet.shapeColor = "green";
    } 
  }

 console.log(damage);
  drawSprites();
  
}
function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
      return true;
    }
    return false;
}