class Game{
    constuctor(){
        
    }
getstate(){
    var Gs=database.ref('gameState');
    Gs.on("value",function (data){
        gameState=data.val();
    })
}
updatestate(state){
    database.ref('/').update({
        gameState:state
    })
        
    
    
} 

start(){

    if(gameState===0){
        player=new Player();
        
        player.getcount();
        form=new Form();
        form.display();
    }
}


}