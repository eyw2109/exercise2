// ***** Global variables ***** //
var maxCircle = 20;
var margin = 30;
var maxBright = 100;
var maxRadius = 30;
var minRadius = 2;

// ***** Preload function ***** //

// ***** Setup function 1 ***** //
function setup(){
    createCanvas(900, 900);
    console.log('Setup complete...');
}

function drawCircle(){
  var maxDistance = dist(0,0,800,800);
  var radStep = (maxRadius-minRadius)/maxDistance;
  var brightStep = maxBright/maxDistance;
  for(var i = 0; i < maxCircle; i++){
    for(var j = 0; j < maxCircle; j++){
      var x = margin + 40*i;
      var y = margin + 40*j;
      var mouseDistance = dist(mouseX,mouseY,x,y);
      stroke(0);
      colorMode(HSB, 100);
      var bright = brightStep*mouseDistance
      c = color(0, 0, bright);
      fill(c);
      var radius = minRadius + radStep*mouseDistance
      ellipse(x, y, 2*radius);
  console.log('complete!');    }
  }
}
// ***** Draw function 1 ***** //
function draw(){
  background(255);
  drawCircle();
}
