function setup() {
  createCanvas(1000, 600);
}

function draw() {
  let c1 = color('#4c4c4c')
  let c2 = color('#a37eba')
  let c3 = color('#e8e8e8')
  let c4 = color('#e5df88')
  let c5 = color('#f56a79')
  background(c2);
  stroke(50);
  strokeWeight(0.8);
  //fill(c2);
  
  for (let x =0; x <= width; x = x + 55) {  
    for (let y =0; y <= height; y = y + 150) {
      fill(c1);
      rect(x,y+x/50,30,100);
      fill(c3);
      rect(x,y,20,90);
      fill(c4);
      ellipse(x,y-x/20,70-x/20,70-x/20);
      fill(c5);
      ellipse(x,y+x/20,20+x/20,20+x/20);
    }
  }

}



