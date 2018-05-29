var canvas = $("#canvas");
var topmiddle = $(".top.middle");

$(function(){
    var time = 1;

    var time = setInterval(function(){
        $(".top.left").text("Tempo de Jogo: " + time++ + " segundos");
    }, 1000);
    
    setInterval(function(){
        var imgs = [
            "images/pedra1.png",
            "images/pedra2.png",
            "images/pedra3.png",
            "images/pedra4.png",
            "images/pedra5.png",
            "images/pedra6.png",
        ]
        var img = $("<img width=50 height=50 src='" + imgs[Math.floor(imgs.length*Math.random())] + "' class='img' />");

        var x = Math.floor(topmiddle.width()*Math.random());
        var y = Math.floor(topmiddle.height()*Math.random());

        img.css("top", y);
        img.css("left", x);
        topmiddle.append(img);

    }, 200)
    
});

//game loop - unusual for now
/*
let lastTime;

function callback(millis){
    if(lastTime){
        update((millis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

function update(dt){
    canvas.height(topmiddle.height());
    canvas.width(topmiddle.width());  
}
*/