class Form{
    constructor(){

    }
    display(){
        var title =createElement("h2");
        title.html("car racing game");
        title.position(130,10)
        var input =createInput("name");
        input.position(130,160);
        var button =createButton("play");
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name =input.value();
        playerCount=playerCount+1
        player.update(name)
        player.updatecount(playerCount);
        
        
        var greeting =createElement("h2");
        greeting.html("hello"+name)
    
    greeting.position(130,160);
    })
    
    
    
    
    
    
    
    
    
    
    
    
    }
}