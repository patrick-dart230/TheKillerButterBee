let wingSize = 0;
let wingPos1 = 150;
let wingPos2 = 185;
let wingPos3 = 250;
let speed = -60;
let xx = 10;
let bColor = 2;
let rColor = 82;
let gColor = 17;
let ellipseSize= 0;
let a = 50;
let angle = 1.0;
let x = 200;
let y = 200;
let xspeed = 5;
let yspeed = 2;
let r = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
 //flashing background 
  let sinval = sin(angle);
  let sky1 = map(sinval, -1, 1, 255, 0);
  let sky2 = map(sinval, -1, 1, 0, 255);
  background(rColor, bColor, gColor);
  background(sky1);
  angle += 0.1;
  
  //ball 1
     ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  
  //butterfly wings
  noStroke(0);
  fill (250, 225, 242);
  ellipse (wingPos1, wingPos2, wingSize-160, wingSize-160);
  
  fill (250, 225, 242);
  ellipse (wingPos3, wingPos2, wingSize-160, wingSize-160);
  
  
  //ground
  noStroke (0);
  fill (163, 104, 145);
  rect(0, 300, 400, 100);
  
  
  //butterfly body
  fill (224, 155, 203);
  ellipse (200, 150, 100, 100);
  
  fill (224, 155, 203);
  ellipse (200, 220, 100, 100);
  
  
  //antennas
  stroke(0);
  strokeWeight(6);
  fill (255);
  line (200, 100, 170, a);
  
  stroke(0);
  strokeWeight(6);
  fill (255);
  line (200, 100, 230, a);
  
  
  //stingers
  fill (209, 182, 200);
  noStroke (0);
  triangle(390, 300, 200, 230, 260, 280);
  
  fill (209, 182, 200);
  noStroke (0);
  triangle(150, 280, 200, 230, 30, 300);
  
  
  //teeth
  fill (255);
  noStroke (255);
  triangle (190, 160, 190, 200, 200, 160);
  
  fill (255);
  noStroke (255);
  triangle (200, 160, 210, 200, 210, 160);
  
  
  //nose
  fill (217, 124, 189);
  ellipse (195, 153, 5, 5);
  
  fill (217, 124, 189);
  ellipse (205, 153, 5, 5);
  
  
  //eyes
  fill (0);
  ellipse (180, 135, 20, 20);
  
  fill (0);
  ellipse (220, 135, 20, 20);
  
  
  //eyes2
  fill (43, 92, 35);
  ellipse (180, 135, xx, xx);
  
  fill (43, 92, 35);
  ellipse (220, 135, xx, xx);
  
  
  //wing animation
  
  wingPos1 = -wingPos1;
  wingPos3 = -wingPos3;
  wingPos2 = -wingPos2;
  
  wingSize = wingSize - speed;
  
  if (wingSize = 0) {
    speed = -speed;
  }
  
  if (wingSize > 0) {
    wingPos1 = -wingPos1;
  }
  
  if (wingSize > 0) {
    wingPos2 = -wingPos2;
  }
  
  wingSize = wingSize -5.0;
  
  
  //eyes2 animation
  
  rotate (radians(xx));
  
  xx=xx+1;
  
  push();
  if (xx > 10) {
    xx = -xx;
  }
  pop();
  
  
  //antennas animation

  a=a+1;
  
  push();
  if (a < 80) {
    a = -a;
  }
  pop();
  
  if (a = 50) {
    speed = -speed;
  }
  if (rColor = 82) {
    rColor 
  }

  
}