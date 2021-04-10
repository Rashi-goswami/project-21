var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

    function setup(){
            canvas = createCanvas(800,600);

            block1 = createSprite(0,580,360,30);
            block1.shapeColor = "blue";

            block2 = createSprite(295,580,200,30);
            block2.shapeColor = "yellow";

            block3 = createSprite(510,580,200,30);
            block3.shapeColor = "red";

            block4 = createSprite(720,580,200,30);
            block4.shapeColor = "green";


            ball = createSprite(random(20,750),100, 40,40);
            ball.shapeColor = rgb(255,255,255);
            ball.velocityX=5;
            ball.velocityY=-5;


}

        function draw() {
            background(rgb(225,225,225));
            edges=createEdgeSprites();
            ball.bounceOff(edges);
            
            
        if(block1.isTouching(ball) && ball.bounceOff(block1)){

              ball.shapeColor="blue";
            }
            
        if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.shapeColor="yellow";
        } 
 
        if(block3.isTouching(ball) && ball.bounceOff(bloc3)){
            ball.shapeColor="red";
        } 

        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor="green";
        } 
            drawSprites();
        }
