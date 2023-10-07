//
// aniscript.js
//


function headdraw() {
    const head = document.getElementById("head");
    const ctx = head.getContext("2d");

    let grd = ctx.createLinearGradient(0, 0, 500, 100);

    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    ctx.fillStyle = grd;
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Animations via Javascript", head.width/2, head.height/2);
  
}
window.addEventListener("load",headdraw);

function replay1() {   
    

}
setInterval(datetime,1000);
function datetime() {
    let d = new Date();
    const t = document.getElementById("timer");
    t.innerHTML = d.toLocaleString();
}



 