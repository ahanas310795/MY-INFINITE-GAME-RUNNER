var John, JohnImg;
var zombie, zombieImg, zombieGroup;
var candy, candyImg, candyGroup;
var path, pathImg, pathGroup;
var gameState = "play"
var score = 0;


function preload(){
    JohnImg = loadImage("John_Running.jpg");
    zombieImg = loadImage("Zombie.jpg");
    candyImg = loadImage("Candy.png");
    pathImg = loadImage("Path.jpg");
    //spookySound = loadSound("Spooky_Sound.wav");
    //jumpSound = loadSound("Jump_Sound.wav");
    //dieSound = loadSound("Lose_Sound.wav");
    //candySound = loadSound("Getting_Candy_Sound.wav");

}

function setup() {
    createCanvas(400, 400);
    //spookySound.loop();

    path = createSprite(200, 200, 400,20);
    path.addImage(pathImg);
    path.velocityX = -4
    path.scale = 0.6;

    John = createSprite(100, 290, 20, 20);
    John.addImage(JohnImg);
    John.scale = 0.09;




 
}

function draw() {
    background(0)

    if(path.x<0){
        path.x=300;
    }
    drawSprites();
 
}