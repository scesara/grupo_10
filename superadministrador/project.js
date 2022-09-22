document.getElementById("myDIV").style.display="none";
document.getElementById("2DIV").style.display="none";
document.getElementById("3DIV").style.display="none";
document.getElementById("4DIV").style.display="none";

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
 function visualizar() {
     var x = document.getElementById("2DIV");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
 function Notas() {
    var x = document.getElementById("3DIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function Retro() {
    var x = document.getElementById("4DIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}