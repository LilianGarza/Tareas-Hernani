function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("contenedor");
}

function draw() {
  background(200, 220, 255);

  noStroke();
  fill(255, 150, 150); 
  rect(50, 50, 100, 80);

  stroke(0);
  strokeWeight(2);
  fill(150, 255, 150);
  ellipse(300, 100, 120, 80);

  stroke(0);
  line(50, 200, 350, 200);

  stroke(255, 0, 0);
  strokeWeight(5);
  point(200, 300);
  point(220, 300);
  point(240, 300);

  fill(150, 150, 255);
  stroke(50, 50, 150);
  rect(150, 250, 100, 100);
}
