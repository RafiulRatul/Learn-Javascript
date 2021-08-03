var imgcanvas= document.getElementById("can1");
  var fileinput = document.getElementById("finput");
var originalimage = null;
var  image;
var context = imgcanvas.getContext("2d");

function upload(){
  originalimage = new SimpleImage(fileinput);
    image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
  var ttt = setTimeout(function() { showImageSize(image.getWidth(), image.getHeight()); }, 1000);
}

function showImageSize(width, height) {
    // Show an image size.
  if (image && image.complete()) {
    document.getElementById("size").innerHTML = "Size:"+ width + "px x" + height + "px";
  }
}

function averageValue(red, green, blue){
  var avg = (red+green+blue)/3;
  return avg;
}

function makeGray() {
  
  if(imageIsLoaded(originalimage)){
  for(var pixel of originalimage.values()){
    var targetPixel = image.getPixel(pixel.getX(), pixel.getY());
    var avg = averageValue(pixel.getRed(),pixel.getGreen(),pixel.getBlue());
    targetPixel.setRed(avg); 
    targetPixel.setGreen(avg); 
    targetPixel.setBlue(avg); 
  }
  image.drawTo(imgcanvas);
  }
}

function resetImage() {
  if(imageIsLoaded(originalimage)){
  originalimage.drawTo(imgcanvas);
}
}

function clearCanvas(){
  context = imgcanvas.getContext("2d");
  context.clearRect(0, 0, imgcanvas.width, imgcanvas.height);
  image = null;
  originalimage = null;
}

function imageIsLoaded(image1) {
    // Check if an image is loaded and display its size.
    if (image1 && image1.complete()) {
        return true;
    }
    window.alert('No image has been uploaded yet.');
    return false;
}


function makeRed(){
   if(imageIsLoaded(originalimage)){
     image= redFilter();
  image.drawTo(imgcanvas);
}
}


function makeRainbow(){
     if(imageIsLoaded(originalimage)){
     image= rainbowFilter();
  image.drawTo(imgcanvas);
}
  
}


function redFilter(){
  
  for (let pixel of originalimage.values()) {
    var avg = averageValue(pixel.getRed(),pixel.getGreen(),pixel.getBlue());
  var targetPixel = image.getPixel(pixel.getX(), pixel.getY());
    if (avg < 128) {
            setNewRGBl(targetPixel, avg, 2*avg, 0, 0);
        } else {
            setNewRGBl(targetPixel, avg, 255, 2*avg - 255, 2*avg - 255);
        }
  }
  return image;
}

function rainbowFilter(){
  let stripeSize = image.getHeight() / 7;
   for (let pixel of originalimage.values()) {
     let pixelY = pixel.getY();
     var avg = averageValue(pixel.getRed(),pixel.getGreen(),pixel.getBlue());
  var targetPixel = image.getPixel(pixel.getX(), pixel.getY());
     
     if (pixelY < stripeSize) {
            // Apply red RGB(255,0,0).
            setNewRGBl(targetPixel, avg, 255, 0, 0);
        } else if (pixelY < 2*stripeSize) {
            // Apply orange RGB(255,165,0).
            setNewRGBl(targetPixel, avg, 255, 165, 0);
        } else if (pixelY < 3*stripeSize) {
            // Apply yellow RGB(255,255,0).
            setNewRGBl(targetPixel, avg, 255, 255, 0);
        } else if (pixelY < 4*stripeSize) {
            // Apply green RGB(0,128,0).
            setNewRGBl(targetPixel, avg, 0, 128, 0);
        } else if (pixelY < 5*stripeSize) {
            // Apply blue RGB(0,0,255).
            setNewRGBl(targetPixel, avg, 0, 0, 255);
        } else if (pixelY < 6*stripeSize) {
            // Apply indigo RGB(111,0,255).
            setNewRGBl(targetPixel, avg, 111, 0, 255);
        } else {
            // Apply violet RGB(159,0,255).
            setNewRGBl(targetPixel, avg, 159, 0, 255);
        }
   }
  return image;
}


function setNewRGBl(pixel, avg, pixelR, pixelG, pixelB) {
    // Set new RGB to a pixel.
    pixel.setRed(calculateRGBForFilters(avg, pixelR));
    pixel.setGreen(calculateRGBForFilters(avg, pixelG));
    pixel.setBlue(calculateRGBForFilters(avg, pixelB));
}


function calculateRGBForFilters(avg, color) {
    /**
     * Color algorithm where each color:
     * Color = Cc/127.5*avg                      for avg < 128
     * Color = (2 - Cc/127.5)*avg + 2*Cc - 255   for avg >=128.
     */
    if (avg === color && (color === 0 || color === 255)) {
        return color;
    } else if (avg < 128) {
        return Math.round(color/127.5*avg);
    } else {
        return Math.round((2 - color/127.5)*avg + 2*color - 255);
    }
}










function blurFilter() {
    // Blur filter algorithm. 
    let intensity = document.getElementById('blur').value;
    let imageWidth = originalimage.getWidth();
    let imageHeight = originalimage.getHeight();
    let resultImage = new SimpleImage(imageWidth, imageHeight);
    const newRandomCoordinate = (currenCoordinate, intensity, maxValue) => {
        let blurValue = currenCoordinate + Math.floor(Math.random() * (2*intensity) - intensity);
        if (blurValue >= 0 && blurValue < maxValue) {
            return blurValue;
        } else {
            return blurValue < 0 ? 0 : maxValue - 1;
        }
    };
    for (let pixel of originalimage.values()) {
        let pixelX = pixel.getX();
        let pixelY = pixel.getY();
        if (Math.random() < 0.5) {
            resultImage.setPixel(pixelX, pixelY, pixel);
        } else {
            resultImage.setPixel(
                pixelX, pixelY,
                originalimage.getPixel(
                    newRandomCoordinate(pixelX, intensity, imageWidth),
                    newRandomCoordinate(pixelY, intensity, imageHeight)
                )
            );
        }

    }
    return resultImage;
}

function doBlur() {
    // Apply blur filer.
    if (imageIsLoaded(originalimage)) {
        let resultImage = blurFilter();
    resultImage.drawTo(document.getElementById("can1"));
    }
    
}