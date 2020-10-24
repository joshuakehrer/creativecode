
var windstärke = 30;
var windstärkeMax = 70;
var umfang = 8;
var umfangMax = 20;
var niederschlag = 45;
var temperatur = 0;
var temperaturMin = -10;
var temperaturMax = 35;

var gui;

let grow = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  sliderRange(0,100,1);
  gui = createGui('Wetter GUI')
  gui.addGlobals('windstärke','umfang','niederschlag','temperatur');
}

function draw() {
  let c1 = lerpColor(color('#93A8C8'), color('#D66262'), map(temperatur, -5, 35, 0, 1));
  let c2 = lerpColor(color('#5369C1'), color('#A01A1A'), map(temperatur, -5, 35, 0, 1));
  let c3 = lerpColor(color('#2A3F69'), color('#A01A1A'), map(temperatur, -5, 35, 0, 1));
  let c4 = lerpColor(color('#98C8DD'), color('#A01A1A'), map(temperatur, -5, 35, 0, 1));
  background(c3);

  stroke(c4);
  strokeWeight(2);
  noFill();
  randomSeed(20);
  for (let x =0; x <= width; x = x + 300) {
  for (let y =0; y <= height; y = y + 300){

  let toggle = int(random (0, 4));

  if (toggle !=3){
    for (let i = 1; i <= umfang; i++) {
      ellipse(x, y, windstärke * i + map(sin(grow), -1, 1, -10, 15), windstärke * i + map(sin(grow), -1, 1, -10, 15));
      grow += 0.01;
      }
    }
   }
  }  

  noStroke();
  for (let n = 0; n < niederschlag; n++) {
    fill(c1);
    rect(random(width), random(height), 40, 40, 2, 20);
    fill(c2);
    rect(random(width), random(height), 65, 65, 2, 35);
  }
}


