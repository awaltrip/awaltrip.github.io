$(document).ready(function () {
    
    if ($(".fa-moon-o").length == 0 && $(".fa-sun-o").length == 0) {
        $("#toggler").addClass("fa-moon-o");
        $(".container, h3, ul").addClass("light");
    }

    //typeWriter(hi);
    //typeWriter(name);
    //typeWriter(bio);

    $("#toggler").on("click", function(event) {
        if ($("#toggler").is(".fa-moon-o")) {   //toggle dark theme
            $("#toggler").removeClass("fa-moon-o").addClass("fa-sun-o yellow");
            $(".light").removeClass("light").addClass("dark");
            $("body").addClass("dark-body");
        } else if ($("#toggler").is(".fa-sun-o")) { //toggle light theme
            $("#toggler").removeClass("fa-sun-o yellow").addClass("fa-moon-o");
            $(".dark").removeClass("dark").addClass("light");
            $("body").removeClass("dark-body");
        }
    });

});

var i = 0;
var hi = "hi.";
var name = "my name is Anna.";
var bio = "i'm a full-stack Java developer based in Columbus, Ohio.";
var speed = 50; //milliseconds

function typeWriter(txt) {
    if (i < txt.length) {
        document.getElementById("hi").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed); //runs function again after 50 milliseconds
    } else {
        i = 0;
    }
}