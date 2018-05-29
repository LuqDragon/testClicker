$(function(){
    $('#text').text("Carregado!");

    setInterval(function(){
        var imgs = [
            "images/pedra1.png",
            "images/pedra2.png",
            "images/pedra3.png",
            "images/pedra4.png",
            "images/pedra5.png",
            "images/pedra6.png"
        ]

        var x = Math.floor(imgs.length*Math.random());

        var img = "<img src=" + imgs[x] + " width=50px height=50px>";

        $('.top.middle').append(img);
    }, 3000);
});