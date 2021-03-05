var  form, player, game, database;
var gameState=0;
var playerCount;



function setup(){
  database = firebase.database();
 
  createCanvas(400,400);
  
  game=new Game();
  
 game.getstate();

 game.start();

}

function draw(){
  background("white");
  
    
  
}

