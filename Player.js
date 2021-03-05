class Player{
    constuctor(){
        
    }
getcount(){
    var Pc=database.ref('playerCount');
    Pc.on("value",function (data){
        playerCount=data.val();
    })
}
updatecount(count){
    database.ref('/').update({
        playerCount:count
    })
        
    
    
} 
update(name){
var playerindex="player"+playerCount;
database.ref(playerindex).set({
  name:name  
})

}


}

