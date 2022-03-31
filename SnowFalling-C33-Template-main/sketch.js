const Engine = Matter.Engine; 
const World= Matter.World;
 const Bodies = Matter.Bodies;
  var engine, world;
var snow =[]
function preload(){
 bg=loadImage("snow1.jpg")
 
}
function setup(){
  var canvas = createCanvas(displayWidth,displayHeight);
engine = Engine.create();
world = engine.world;

}

function draw() {
  imageMode(CENTER)
   image(bg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  Engine.update(engine)
  if(frameCount%10===0){
  snow.push(new Snow(random(100,displayWidth),0))
  }
  for(var i = 0; i<snow.length ;i++){
    snow[i].display()
  }


}
