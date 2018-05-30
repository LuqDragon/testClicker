var canvas = $("#canvas");
var topmiddle = $(".top.middle");
var topright = $(".top.right");
var x = 0;
var y = 0;
var p = 0;

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

        var x = Math.floor(Math.random() * ((topmiddle.width() - 150) - 100) + 100);
        var y = Math.floor(Math.random() * ((topmiddle.height() - 75) - 50) + 50);

        img.css("top", (y - img.height()));
        img.css("left", (x - img.width()));
        topmiddle.append(img);
        img.addClass('animated bounceIn');
        img.click(function(){
            p++;
            topright.text("Pedras: " + p);
            img.remove();
        });

    }, 2000)
    
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