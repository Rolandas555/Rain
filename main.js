function resize() {
    var n = $(".heading").width() / 40 + "pt";
    $("h1").css('fontSize', n);
}
$(window).on("resize", resize);
$(document).ready(resize);

// The ratio can be adjusted by replacing the value 40 and it can be used for other tags by changing the h1.

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("img-fluid");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds  
}