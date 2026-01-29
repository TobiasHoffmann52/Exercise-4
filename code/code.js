let mode = 0;

function setup() {
  createCanvas(800, 300);
  angleMode(DEGREES);
}

function draw() {
  if (mode === 0) {
    clear();
    background(255, 0, 255);

    for (let i = 30; i < 700; i +=10) {
      strokeWeight(3);
      line(i, 0, i+100, 150);
      line(i, 300, i+100, 150);
    }
  }
  if (mode === 1) {
    clear();
    background(0);
    translate(400, 150);
    for (let i = 0; i < 360; i += 30) {
      rotate(30);
      fill(255, 255, 0);
      ellipse(0, 0+50, 50, 150);
      fill(255);
      circle(0, 0, 50);
    }
  }
}

function mouseClicked() {
  if (mode === 0) {
    mode = 1;
  } else {
    mode = 0;
  }
}
