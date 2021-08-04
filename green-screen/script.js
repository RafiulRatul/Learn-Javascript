var imgcanvas1 = null;
 imgcanvas1 = document.getElementById("can1");

var imgcanvas2= null;
imgcanvas2= document.getElementById("can2");

var imgcanvas3 = null;
imgcanvas3= document.getElementById("can3");

var context1 = imgcanvas1.getContext("2d");
var context2 = imgcanvas2.getContext("2d");
var context3 = imgcanvas3.getContext("2d");

  var  fileinput1 = document.getElementById("finput1");
var  fileinput2 = document.getElementById("finput2");

var  image1 = null;
var  image2 = null;
var image3 = null;

function upload1() {
   image1 = new SimpleImage(fileinput1);
  image1.drawTo(imgcanvas1);   
}

function upload2(){
   image2 = new SimpleImage(fileinput2);
  image2.drawTo(imgcanvas2);
}

function greenscreen(){
  if(image1 == null || !image1.complete() ) {
    alert("Foreground not loaded") ;
    return;
  }
  
  if(image2 == null || !image2.complete()){
    alert("Background not loaded");
  }

  clearCanvas1();
   clearCanvas2();

  
  var greenThreshold = 240;
  image3 = new SimpleImage(image1.getWidth(), image1.getHeight());
  for(var pixel of image1.values()){
    var x=pixel.getX();
    var y= pixel.getY();
    if(pixel.getGreen() > greenThreshold){
      var bgpixel = image2.getPixel(x,y);
      image3.setPixel(x,y, bgpixel);
      
    }
    else{
      image3.setPixel(x,y,pixel);
    }
  }
  image3.drawTo(imgcanvas3);
}


function clearCanvas1(){
  context1.clearRect(0, 0, imgcanvas1.width, imgcanvas1.height);
  
}


function clearCanvas2(){
  context2.clearRect(0, 0, imgcanvas2.width, imgcanvas2.height);
  
}


function clearCanvas3(){
  context3.clearRect(0, 0, imgcanvas3.width, imgcanvas3.height);
  
}