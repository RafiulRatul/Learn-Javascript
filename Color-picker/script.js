function doColor() {
  var dd1= document.getElementById("d1");
  var colorinput = document.getElementById("clr");
  dd1.style.backgroundColor = colorinput.value;
  
  
}

function dosquare(){
 var dd1= document.getElementById("d1");
  var sizeinput=document.getElementById("sldr");
  var size= sizeinput.value;
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0,0, dd1.width, dd1.height);
  ctx.fillStyle= "yellow";
  ctx.fillRect(10,10, size, size);
  ctx.fillRect(parseInt(size)+20,10,size,size);
}