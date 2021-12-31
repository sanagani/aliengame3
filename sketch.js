
var backgroundImg, fireboltImg, spaceShipImg
var background1, spaceship, astronautImg, astronaut, astronautImg2;
var ground;
var alien, alienImg, alienShipImgv, alienGroup;
var reloadImg, gameOverImg, playImg;
var reload, gameover,play;
var poisonGroup, poison, poisonImg;

function preload(){
  backgroundImg = loadImage("./Assets/scifi_wallpaper.png")
  fireboltImg = loadImage("./Assets/firebolt.png")
  spaceShipImg = loadImage("./Assets/spaceship.png")
  astronautImg = loadImage("./Assets/astro_falling.png")
  astronautImg2 = loadImage("./Assets/astro_fighting.png")
  alienShipImg = loadImage("./Assets/alien_ship.png")
  alienImg = loadImage("./Assets/alien.png")
  poisonImg = loadImage("./Assets/poison.png")
  reloadImg = loadImage("./Assets/reload.png")
  gameOverImg = loadImage("./Assets/gameover.png")
  playImg = loadImage("./Assets/play_button.png")
}

function setup() {
  createCanvas(800,400);
  background1 = createSprite(400,200, 800,400)
  background1.addImage(backgroundImg)
  background1.scale = .5

  spaceship = createSprite(100,100)
  spaceship.addImage(spaceShipImg)
  spaceship.scale = .20

  astronaut = createSprite(150,160)
  astronaut.addImage(astronautImg);
  astronaut.scale = 1

  ground = createSprite(400,400,800,1)

  alien = createSprite(750,160)
  //alien.y = Math.round(random(100,400))
  alien.addImage(alienShipImg);
  alien.scale = .15

  gameover = createSprite(400,200,50,50)
  gameover.addImage(gameOverImg)
  gameover.scale = .4

  reload = createSprite(400,200,50,50)
  reload.addImage(reloadImg)
  reload.scale = .4

  play = createSprite(400,200,50,50)
  play.addImage(playImg)
  play.scale = .4

  poisonGroup = createGroup()
 // alienGroup = new Group
}

function draw() {
  background(255,255,255);  
  drawSprites();

  astronautControls();
  //spawnAliens();

  alien.velocityY = 2

  if(alien.isTouching(ground)){
    alien.velocityY = 0
    alien.addImage(alienImg)
    alien.scale = .5
    alien.x = alien.x - 2
    shootPoison();
  }

  if(alien.x < 0){
    alien.x = 800
  }

  if(astronaut.isTouching(ground)){
    astronaut.addImage(astronautImg2)
    
  }
}

function astronautControls(){
  if(keyIsDown(DOWN_ARROW)){
    astronaut.position.y = astronaut.position.y + 3
  }

  if(keyIsDown(UP_ARROW)){
    astronaut.position.y = astronaut.position.y - 3
  }

  if(keyIsDown(LEFT_ARROW)){
    astronaut.position.x = astronaut.position.x - 3
  }

  if(keyIsDown(RIGHT_ARROW)){
    astronaut.position.x = astronaut.position.x + 3
  }
}

function shootPoison(){
  poison = createSprite(alien.x,alien.y)
  poison.addImage(poisonImg)
  poison.scale = .7
  poison.velocityX = 4
  poison.velocityY = alien.velocityY
  poison.x = alien.x - 30
  poisonGroup.add(poison)
}

//function spawnAliens(){
//  if(frameCount%120 == 0){
  //  alien = createSprite(Math.round(random(300,750)),300)
  //alien.addImage(alienShipImg);
  //alien.scale = .15

    //alienGroup.add(alien)

    //alienGroup.velocityEachX(-3)
    //alien.velocityY = 2

    //if(alienGroup.x < 0){
    //  alien.x = 800
    //}
  //}
//}

