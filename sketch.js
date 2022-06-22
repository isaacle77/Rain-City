var zack,gota;
var bgimg,endImg,gotaimg,zackandando,zackparado;
var grupo,gameover;
var isGameover = false;

function preload(){
 bgimg = loadImage("city.jpg");
 endImg = loadImage("go.jpeg");
 gotaimg = loadImage("agua.png");
 zackparado = loadAnimation("Idle1.png","Idle10.png");
 zackandando = loadAnimation("Walk1.png","Walk10.png");
}

function setup() {
	createCanvas(500, 650);
	zack = createSprite(250,500);
	zack.addAnimation("parado",zackparado);
	zack.addAnimation("andando",zackandando);
	zack.scale = 0.3;
 	
	grupo=new Group();
	grupo.visible=true;
	
	gameover = createSprite(250,380);
	gameover.addImage(endImg);
	gameover.scale=0.5;
	gameover.visible=false;

	
}

function draw() {
	background (bgimg);
	drawSprites();
	if(keyDown("right")){
		zack.position.x += 7
		zack.changeAnimation("andando",zackandando);
		zack.mirrorX(1);
	}
	else if(keyDown("left")){
		zack.position.x -= 7
		zack.changeAnimation("andando",zackandando);
		zack.mirrorX(-1);
	}
	else{zack.changeAnimation("parado",zackparado)}
	if(grupo.isTouching(zack)) {
		grupo.setVisibleEach(false);
		gameover.visible = true;
		bgimg.visible = false;
		isGameover = true;
	}
	if (World.frameCount % 60 == 0) {
	  if(!isGameover){
	        var g = createSprite(Math.round(random(50, 450),90, 10, 10));
			g.addImage(gotaimg);
			g.scale=0.1;
			g.velocityY = 10;
			g.lifetime = 110;
			grupo.add(g);
	  }
		
	
	}
}
