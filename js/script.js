var canvas = $("#canvas");
var topmiddle = $(".top.middle");
var topright = $(".top.right");
var x, y, p = 0, s = 0, pickaxes = 0, axes = 0;
var img;
var controlPedra = 0, controlGraveto = 0;
var time = 1;
var pickButton = $("#pickButton");
var sps = 0, pps = 0;
var axeButton = $("#axeButton");
var topleft = $(".top.left");
var strings = [];

$(function(){

    callback();

    //Load string file according browser language
    if(navigator.language == "pt-BR"){
        $.getJSON('pt-BR.json', function(data) {
            strings = data;
            $("#axe").text(strings.axe);
            $(".infoAxe").text(strings.valueAxe);
            $("#pickaxe").text(strings.pickaxe);
            $(".infoPickaxe").text(strings.valuePickaxe);
            $("#tempo").text(strings.time);
        });
    }    
    else{
        $.getJSON('en-US.json', function(data) {
            strings = data;
            $("#axe").text(strings.axe);
            $(".infoAxe").text(strings.valueAxe);
            $("#pickaxe").text(strings.pickaxe);
            $(".infoPickaxe").text(strings.valuePickaxe);
            $("#tempo").text(strings.time);
        });
    }    
    //Tempo
    var time = setInterval(function(){
        time++
        $("#tempo").text(strings.time + time + strings.seconds);
    }, 1000);
    
    //Geração de pedras e evento de click
    var pedraGenerator = setInterval(function(){
        var imgs = [
            "images/pedra1.png",
            "images/pedra2.png",
            "images/pedra3.png",
            "images/pedra4.png",
            "images/pedra5.png",
            "images/pedra6.png",
        ]
        var img = $("<img src='" + imgs[Math.floor(imgs.length*Math.random())] + "' class='img' />");

        //determina a distribuição dos elementos na tela
        x = Math.floor(Math.random() * ((topmiddle.width() - 150) - 100) + 100);
        y = Math.floor(Math.random() * ((topmiddle.height() - 75) - 50) + 50);

        img.css("top", (y - img.height()));
        img.css("left", (x - img.width()));
        topmiddle.append(img);
        img.addClass("animated bounceIn");
        //Pedra click
        img.on('click', function(){
                if(controlPedra == 0){
                    controlPedra++;
                    p++;
                    var text = $("<p class='textOverMouse'>" + strings.popUpStone + "</p>");
                        text.css("top", parseInt(img.css("top"), 10) - img.height()/2)
                        .css("left", img.css("left"));
                        topmiddle.append(text);
                        text.addClass("animated fadeInUp")
                        .removeClass("fadeInUp")
                        .addClass("fadeOutUp")
                        .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                            text.remove();
                        });
                    img.removeClass("animated bounceIn")
                    .addClass("animated bounceOut")
                    .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                        controlPedra = 0;
                        img.remove();
                    });
                }
            });
    }, 2000)

    //Geração de gravetos e evento de click
    var gravetoGenerator = setInterval(function(){
        var img = $("<img src='images/stick.png' class='img' />");

        //determina a distribuiçao dos elementos na tela
        x = Math.floor(Math.random() * ((topmiddle.width() - 150) - 100) + 100);
        y = Math.floor(Math.random() * ((topmiddle.height() - 75) - 50) + 50);

        img.css("top", (y - img.height()));
        img.css("left", (x - img.width()));
        topmiddle.append(img);
        img.addClass("animated bounceIn");
        //Graveto click
        img.on('click', function(){
                if(controlGraveto == 0){
                    controlGraveto++;
                    s++;
                    var text = $("<p class='textOverMouse'>" + strings.popUpStick +"</p>");
                        text.css("top", parseInt(img.css("top"), 10) - img.height()/2)
                        .css("left", img.css("left"));
                        topmiddle.append(text);
                        text.addClass("animated fadeInUp")
                        .removeClass("fadeInUp")
                        .addClass("fadeOutUp")
                        .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                            text.remove();
                        });
                    img.removeClass("animated bounceIn")
                    .addClass("animated bounceOut")
                    .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
                        img.remove();
                        controlGraveto = 0;
                    });
                }
            });
    }, 2500);

});

//Description of pickaxes
pickButton.hover(function(){
    var description = $("<p class='description animated fadeIn'>" + strings.descPickaxe + "</p>");
    topleft.append(description);
}, function(){
    var description = $(".description.animated.fadeIn");
    description.removeClass("fadeIn")
    .addClass("fadeOut")
    .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
        description.remove();
    });
});

//Description of axes
axeButton.hover(function(){
    var description = $("<p class='description animated fadeIn'>" + strings.descAxe + "</p>");
    topleft.append(description);
}, function(){
    var description = $(".description.animated.fadeIn");
    description.removeClass("fadeIn")
    .addClass("fadeOut")
    .one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function(){
        description.remove();
    });
});

$(".pt-br").on('click', function(){
    $.getJSON('pt-br.json', function(data) {
        strings = data;
        $("#axe").text(strings.axe);
        $(".infoAxe").text(strings.valueAxe);
        $("#pickaxe").text(strings.pickaxe);
        $(".infoPickaxe").text(strings.valuePickaxe);
        $("#tempo").text(strings.time);
    });
    
});

$(".en-us").on('click', function(){
    $.getJSON('en-us.json', function(data) {
        strings = data;
        $("#axe").text(strings.axe);
        $(".infoAxe").text(strings.valueAxe);
        $("#pickaxe").text(strings.pickaxe);
        $(".infoPickaxe").text(strings.valuePickaxe);
        $("#tempo").text(strings.time);
    });
    
});

//game loop
let lastTime;

function callback(millis){
    if(lastTime){
        update((millis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

function update(dt){

    $("#pedras").text(strings.countStones + p);
    $("#gravetos").text(strings.countSticks + s);
}
