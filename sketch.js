var mlkImg, mlk;
var ceuImg, ceu
var kriptonitaImg, kriptonitaGroup, kriptonita;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
    mlkImg = loadImage ("superman 2.png")
    ceuImg = loadImage ("ceu-corrida-infinita.jpg")
    kriptonitaImg = loadImage ("kriptonita-removebg-preview.png")

}

function setup() {
    createCanvas(600, 600);
  ceu = createSprite(300,300);
  ceu.addImage("ceu-corrida-infinita",ceuImg);
  ceu.velocityY = 1;

  kriptonitaGroup = new Group();
  invisibleBlockGroup = new Group();

  mlk = createSprite(200,200,50,50);
  mlk.scale = 0.05;
  mlk.addImage("superman 2.png", mlkImg);

  
 
}

function draw() {
    background(200);
    if (gameState === "play") {
    if(ceu.y > 400){
        ceu.y = 300
      }
      spawnKriptonita();

      if(keyDown("left_arrow")){ mlk.x = mlk.x - 3; } 
    if(keyDown("right_arrow")){ mlk.x = mlk.x + 3; } 
    if(keyDown("space")){ mlk.velocityY = -10; } 
    mlk.velocityY = mlk.velocityY + 0.8

    if(kriptonitaGroup.isTouching(mlk)){ mlk.velocityY = 0; } 
    if(invisibleBlockGroup.isTouching(mlk) || 
    mlk.y > 600){ mlk.destroy(); 
    gameState = "end" }


    drawSprites();
  } if (gameState === "end"){ 
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Fim de Jogo", 230,250) }

    function spawnKriptonita() {

      if (frameCount % 240 === 0) { 
        var kriptonita = createSprite(1, -50); 
        kriptonita.scale = 0.5;
        kriptonita.addImage("kriptonita-removebg-preview.png",kriptonitaImg)
        var invisibleBlock = createSprite(200,15); 
        invisibleBlock.width = 2;
        invisibleBlock.height = 2;

        kriptonita.x = Math.round(random(120,400)); 
        invisibleBlock.x = kriptonita.x; 
        

        kriptonita.velocityY = 1; 
        invisibleBlock.velocityY = 1; 
        mlk.depth = kriptonita.depth; 
        mlk.depth +=1;
    
        kriptonita.lifetime = 800; 
        invisibleBlock.lifetime = 800;  
         
        invisibleBlock.debug = false; 
        invisibleBlockGroup.add( invisibleBlock);
        kriptonitaGroup.add(kriptonita);
       



    
    
}
 
}

}