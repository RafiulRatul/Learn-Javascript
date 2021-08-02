function dochange(){
  
  alert('clicked button');
  
}
function doconfirm(){
  confirm('clicked this too');
}
function myFunction(){
  
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;

}
function changecolor(){
  
  var dd1 = document.getElementById("di1");
  var dd2 = document.getElementById("di2");
  dd1.className= "div1";
  dd2.className= "div2";
}
function changecolorback(){
  
  var dd1 = document.getElementById("di1");
  var dd2 = document.getElementById("di2");
  dd1.className= "di1";
  dd2.className= "di2";
}

function changetext(){
  var dd1 = document.getElementById("assd");
  var dd2 = document.getElementById("adsd");
  dd1.innerHTML="Bonjour";
  dd2.innerHTML="Sayonara";
  
}

function changetextagain(){
  var dd1 = document.getElementById("assd");
  var dd2 = document.getElementById("adsd");
  dd1.innerHTML="Hello";
  dd2.innerHTML="Goodbye";
  
}

function changetextcolor() {
  document.getElementById("assd").style.color= '#ff0000';
  
}