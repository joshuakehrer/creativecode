
var anz = 8;
var kmh = 50;
var anzahl =40;

var gui;


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  sliderRange(0,60,1);
  gui = createGui('p5.gui')
  gui.addGlobals('anz','kmh','anzahl');
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
    ellipse(800, 680, kmh * i, kmh * i);
  }
  stroke(c4);
  for (let i = 1; i <= anz; i++) {
    ellipse(800, 280, kmh * i, kmh * i);
  }
  stroke(c4);
  for (let i = 1; i <= anz; i++) {
    ellipse(400, 680, kmh * i, kmh * i);
  }
  stroke(c2);
  for (let i = 1; i <= anz; i++) {
    ellipse(400, 280, kmh * i, kmh * i);
  }
  stroke(c2);
  for (let i = 1; i <= anz; i++) {
    ellipse(1200, 280, kmh * i, kmh * i);
  }
  stroke(c4);
  for (let i = 1; i <= anz; i++) {
    ellipse(1200, 680, kmh * i, kmh * i);
  }
  

  noStroke();
  fill(c7);
  randomSeed(50);
  for (let n = 0; n < anzahl; n++) {
    ellipse(random(width), random(height), 30, 30,5);
  }

}


