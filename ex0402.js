
function init(){
 timeSet();
 canvas02.width = canvas02.height;   // LG laptop computer => window width:1280,height:610;
}
function timeSet(){
 draw();
 setTimeout(function(){timeSet();},80);
}
var ca01;
var t = 0;
function draw(){
 ca01 = document.getElementById("canvas02").getContext("2d");
 ca01.x = 10;
 ca01.y = 10;

 ca01.fillStyle = "rgb(0,0,255)";
 if(t<100){ ca01.fillRect(ca01.x+t,ca01.y,10,10);}               // x,  y,   t
 else if(t<200){ ca01.fillRect(ca01.x+100,ca01.y-100+t,10,10);}  // 100,10, 100
 else if(t<300){ ca01.fillRect(ca01.x+300-t,ca01.y+100,10,10);}  // 100,100,200
 else if(t<400){ ca01.fillRect(ca01.x,ca01.y+400-t,10,10);}      // 10, 100,300

 t += 2;

}
addEventListener("load",init);