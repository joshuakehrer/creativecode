function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);
}

function draw() {
  
  //console.log(m);
  
  let h = map (mouseX, 0, 1600, 0, 360);
  background(h,50,50);
 
  fill(h,30,25);
  
  ellipse(380, 250, 230,230);
  triangle(0, windowHeight, 1000, windowHeight, 250, 500);
}



