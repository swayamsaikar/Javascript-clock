var sc;
var mn;
var hr;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  translate(200, 200);
  rotate(-90);

  background(0);
  sc = second();
  hr = hour();
  mn = minute();

  strokeWeight(8);
  stroke(255, 150, 235);
  noFill();
  var secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  strokeWeight(8);
  stroke(154, 234, 101);
  var minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  strokeWeight(8);
  stroke(137, 96, 253);
  var hourAngle = map(hr % 12, 0, 24, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 150, 235);
  line(0, 0, 85, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(154, 234, 101);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(137, 96, 253);
  line(0, 0, 65, 0);
  pop();

  drawSprites();
}
