//Create variables here

var dog
var database
var foodstock, foodS

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
  database=firebase.database()

  dog = createSprite(400, 350, 50, 50)
  dog.addImage(dogImg)
  dog.scale=0.3

  foodstock=database.ref("food")
  foodstock.on("value", stock)
}

function draw() {  

  background(28, 176, 200)
  if(keyDown(UP_ARROW)){
    write(foodS)
    dog.addImage(dogImg2)
    dog.scale=0.3
  }

  drawSprites();
  //add styles here
  textSize(40)
  text("Food remaining :"+ foodS, 200, 100)
}

function stock(data){
  foodS=data.val()
}

function write(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}
