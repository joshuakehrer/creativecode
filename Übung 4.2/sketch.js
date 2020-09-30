
var anz = 10;
var kmh = 40;
var niederschlag = 5;
var dichte = 40;

var gui;


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  sliderRange(0,100,1);
  gui = createGui('p5.gui')
  gui.addGlobals('anz','kmh','niederschlag','dichte');
}

function draw() {
  let c1 = color ('#2F2F2F')
  background(c1);
  
  //blue
  let c2 = color('#45757E');
  let c3 = color('#5896A2');
  let c4 = color('#91B8BF');

  //purple
  let c5 = color('#705974');
  let c6 = color('#857788');
  let c7 = color('#B7AEB9');

  stroke(c2);
  strokeWeight(2);
  noFill();

  for (let i = 1; i <= anz; i++) {
    ellipse(800, 580, kmh * i, kmh * i);
  }
  stroke(c7);
  for (let i = 1; i <= anz; i++) {
    ellipse(400, 580, kmh * i, kmh * i);
  }
  stroke(c4);
  for (let i = 1; i <= anz; i++) {
    ellipse(600, 350, kmh * i, kmh * i);
  }
  
  noStroke();
  fill(c4);
  for (let i = 1; i <= dichte; i++) {
    rect(1200, 100, niederschlag * i, niederschlag * i,40);
  }
  fill(c2);
  for (let i = 1; i <= dichte; i++) {
    rect(1100, 200, niederschlag * i, niederschlag * i,40);
  }
  fill(c7);
  for (let i = 1; i <= dichte; i++) {
    rect(1250, 350, niederschlag * i, niederschlag * i,40);
  }


}


