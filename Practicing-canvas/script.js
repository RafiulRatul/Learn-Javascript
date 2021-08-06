function changeColor(){
  var de1= document.getElementById("can1");
  var de2= document.getElementById("can2");
  de1.className= "blueback";
  de2.className= "orange";
}


function doRed1(){
  var de1= document.getElementById("can1");
  de1.style.backgroundColor="red";
}
function doGreen1(){
  var de1= document.getElementById("can1");
  de1.style.backgroundColor="green";
}
function doRed2(){
  var de1= document.getElementById("can2");
  de1.style.backgroundColor="red";
}
function doGreen2(){
  var de1= document.getElementById("can2");
  de1.style.backgroundColor="green";
}

function doBox1(){
   var de1= document.getElementById("can1");
  var de2= document.getElementById("can2");
  var ctx = de1.getContext("2d");
  
  ctx.fillStyle="black";
  ctx.fillRect(10,10,130,130);
  ctx.fillRect(160,10,130,130);
  ctx.fillStyle="white";
  ctx.font ="30px Arial";
  ctx.fillText("Bonjour", 23, 80);
}

function changeBack(){
  var de1= document.getElementById("can1");
  var de2= document.getElementById("can2");
  var ctx = de1.getContext("2d");
  ctx.clearRect(0,0,de1.width, de1.height);
  de1.style.backgroundColor = "blue";
  
}