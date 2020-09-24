function setup() {
  createCanvas(1000, 600);
}

function draw() {
  let c1 = color('#625261')
  let c2 = color('#a6a6a4')
  let c3 = color('#e8e8e8')
  let c4 = color('#89beb3')
  background(c2);
  stroke(50);
  strokeWeight(0.8);
  //fill(c2);
  
  for (let x =0; x <= width; x = x + 50) {  
    for (let y =0; y <= height; y = y + 100) {
      fill(c1);
      rect(x,y,30,200);
      fill(c3);
      rect(x,y,25,50);
      fill(c4);
      ellipse(x,y,70,70);
      fill(c2);
      ellipse(x,y,50,50);
    }
  }

}



