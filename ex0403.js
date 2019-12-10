
function init03(){
 timeSet03();
 canvas03.width = canvas03.height;   // LG laptop computer => window width:1280,height:610;
}
function timeSet03(){
 draw03();
 setTimeout(function(){timeSet03();},80);
}
var ca03;
var c = 0;
function draw03(){
 ca03 = document.getElementById("canvas03").getContext("2d");
 var cx = canvas03.width/2;
 var cy = canvas03.height/2;
 var r = 50;
 ca03.x = cx + r*Math.cos(c);
 ca03.y = cy + r*Math.sin(c);
 ca03.width = 20;
 ca03.height = 2;

 ca03.fillStyle = "rgb(0,255,0)";
 if(c<100){ ca03.fillRect(ca03.x,ca03.y,ca03.width,ca03.height);}
 c += 0.5;

}
addEventListener("load",init03);