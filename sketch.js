var catimg ;mouseimg
function preload(){
catimg=loadAnimation("cat1.png");
catimg=loadAnimation("cat2.png");
catimg=loadAnimation("cat3.png");
catimg=loadAnimation("cat4.png");
mouseimg=loadAnimation("mouse1.png");
mouseimg=loadAnimation("mouse2.png");
mouseimg=loadAnimation("mouse3.png");
mouseimg=loadAnimation("mouse4.png");
gardenimg=loadImage("garden.png");




}


function setup(){
createCanvas(1000,800)

cat=createSprite(870,600);
cat.addAnimation("catWalking",cat_walking)
cat.scale = 0.9;

mouse = createSprite(200,600);
mouse.addImage("mouse",mouseImage);
mouse.scale=0.5





}



function draw(){
background(ground);


if(cat.x-mouse.x<(cat.width-mouse.width)/2){


}
cat.velocityX-0
cat.addAnimation("cat_image",cat2img);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("cat_Image",cat4img)


mouse.addAnimation("mouse_image",mouse4img);
mouse.x=300;
mouse.scale=0.2;
mouse.changeAnimation("mouse_Image",)

drawSprites();

}


function keyPressed(){
  if (keyCode===LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouse.img2);
    mouse.addAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

    if (keyCode===LEFT_ARROW){

   mouse.addAnimation("mouseTeasing",mouse.img2);
   mouse.addAnimation("mouseTeasing");   
   mouse.frameDelay = 25;


    }
}
