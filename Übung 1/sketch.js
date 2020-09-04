
function setup() {
  createCanvas(600, 600);
  let c1 = color('#ff4b5c')
  background(c1);
}

function draw() {
  noFill();
  let c3 = color('e0ece4')
  stroke(c3);
  strokeWeight(2);
  rect(25,25,550,550);
  rect(50,50,500,500);
  rect(75,75,450,450);
  rect(100,100,400,400);
  rect(125,125,350,350);
  
  noStroke();
  let c1 = color('#056674');
  fill(0);
  triangle(50, 50, 400, 50, 50, 400);
  triangle(200, 550, 550, 550, 550, 200);

  fill(c3);
  noStroke();
  rect(150,150,300,300);
  
  stroke(c3);
  strokeWeight(1);
  fill(0);
  line(0, 0, 600, 600);
  line(600, 0, 0, 600);

  noStroke();
  fill(0);
  ellipse(300, 300, 100, 100);
  
}



