var canvas = $("#canvas");
var topmiddle = $(".top.middle");
var topright = $(".top.right");
var x, y, p = 0, s = 0;
var img;
var controlPedra = 0, controlGraveto = 0;
var time = 1;

$(function(){
   
    //Tempo
    var time = setInterval(function(){
        $("#tempo").text("Tempo de Jogo: " + time++ + " segundos");
    }, 1000);
    
    //Geração de pedras e evento de click
    var pedras = setInterval(function(){
        var imgs = [
            "images/pedra1.png",
            "images/pedra2.png",
            "images/pedra3.png",
            "images/pedra4.png",
            "images/pedra5.png",
            "images/pedra6.png",
        ]
        var img = $("<img width=50 height=50 src='" + imgs[Math.floor(imgs.length*Math.random())] + "' class='img' />");

        x = Math.floor(Math.random() * ((topmiddle.width() - 150) - 100) + 100);
        y = Math.floor(Math.random() * ((topmiddle.height() - 75) - 50) + 50);

        img.css("top", (y - img.height()));
        img.css("left", (x - img.width()));
        topmiddle.append(img);
        img.addClass("animated bounceIn");
        img.on('click', function(){
            if(controlPedra == 0){
                controlPedra++;
                p++;
                img.removeClass("animated bounceIn")
                .addClass("animated bounceOut")
                .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                    img.remove();
                    $("#pedras").text("Pedras: " + p);
                    controlPedra = 0;
                });
            }
        });

    }, 2000)

    //Geração de gravetos e evento de click
    var graveto = setInterval(function(){
        var img = $("<img src='images/stick.png' class='img' />");

        x = Math.floor(Math.random() * ((topmiddle.width() - 150) - 100) + 100);
        y = Math.floor(Math.random() * ((topmiddle.height() - 75) - 50) + 50);

        img.css("top", (y - img.height()));
        img.css("left", (x - img.width()));
        topmiddle.append(img);
        img.addClass("animated bounceIn");
        img.on('click', function(){
            if(controlGraveto == 0){
                controlGraveto++;
                s++;
                img.removeClass("animated bounceIn")
                .addClass("animated bounceOut")
                .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                    img.remove();
                    $("#gravetos").text("Gravetos: " + s);
                    controlGraveto = 0;
                });
            }
        });

    }, 2500);
    
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