/* eslint-disable no-undef, no-unused-vars */
var angle = 0;
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  angle = slider.value();
  background(51);
  let len = 100;
  stroke(255);
  translate(200, height);
  branch(100);
}
function branch(len) {
  line(0, 0, 0, 0 - len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
