
function lines(){

var ca01;
var ca02;
var ca03;

ca01 = document.getElementById("canvas01").getContext("2d");
ca02 = document.getElementById("canvas01").getContext("2d");
ca03 = document.getElementById("canvas01").getContext("2d");
canvas01.width = canvas01.height;
for(var i=0;i<20;i++){
ca01.fillStyle = "red";
ca01.fillRect(10,10+i*5,100,1);

ca02.fillStyle = "green";
ca02.fillRect(20+i*5,20,1,100);

ca03.strokeStyle = "blue";
ca03.moveTo(30+i*5,40);
ca03.lineTo(60+i*5,120);
ca03.stroke();
}

}
addEventListener("load",lines);


