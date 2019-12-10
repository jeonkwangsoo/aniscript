var ca04;
var t04 = 0;
var r=50;
function init04(){
 ca04 = document.getElementById("canvas04").getContext("2d");
 canvas04.width = canvas04.height;   // LG laptop computer => window width:1280,height:610;
 ca04.x = canvas04.width/2+50;
 ca04.y = canvas04.height/2;
 ca04.strokeStyle = "rgb(255,0,0)";
 ca04.moveTo(ca04.x,ca04.y);

 timeSet04();
}
function timeSet04(){
 setTimeout(function(){timeSet04();},80);
 draw04();
}
function draw04(){
 ca04.x = canvas04.width/2 + r*Math.cos(t04);
 ca04.y = canvas04.height/2 + r*Math.sin(t04);
 ca04.lineTo(ca04.x,ca04.y);
 if(t04<7){ca04.stroke();}
 t04 += 0.1;
}
addEventListener("load",init04);