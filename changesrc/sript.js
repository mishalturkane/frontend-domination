var fimg = document.querySelector("#first");
var simg = document.querySelector("#second");
var btn = document.querySelector("button");

btn.addEventListener("click", function() {

  
    fsrc = fimg.src;
    ssrc = simg.src;

    fimg.src = ssrc;
    simg.src = fsrc;
});