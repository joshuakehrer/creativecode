function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  let c1 = color('#557571')
  let c2 = color('#ff7e67')
  let c3 = color('#fddb3a')
  background(c1);
  
  let a=0;
  fill(10,100);
  stroke(c2);
  strokeWeight(1);
  ellipse(a,a,a,a);
 
  //kreis 1
  a+=30;
  ellipse(a,a,a,a);
  
  //kreis 2
  a+=25;
  ellipse(a,a,a,a);
  
  //kreis 3
  a+=30;
  ellipse(a,a,a,a);
  
  //kreis 4
  a+=30;
  ellipse(a,a,a,a);
  
  //kreis 5
  a+=30;
  ellipse(a,a,a,a);

  //kreis 6
  a+=40;
  ellipse(a,a,a,a);

  //kreis 7
  a+=45;
  ellipse(a,a,a,a);

  //kreis 8.1
  a+=60;
  ellipse(a,a,a,a);

  //kreis 8.2
  a+=60;
  ellipse(a+200,a-80,a,a);

  //kreis 8.3
  a+=60;
  ellipse(a-200,a+80,a-60,a-60);

  //kreis 9
  a+=70;
  ellipse(a,a,a,a);

  //kreis 10
  a+=85;
  ellipse(a,a,a,a);

  //kreis 12
  a+=95;
  ellipse(a,a,a,a);
  
  //kreis 13
  a+=120;
  ellipse(a,a,a,a);

  //kreis 14
  a+=150;
  ellipse(a,a,a,a);
  
  line(0, 0, 700, 700,);
  line(0, 0, 490, 700,);
  line(0, 0, 700, 490,);
}


