function setup() {
    createCanvas(400, 600);
    background(random(0, 255), random(0, 255), random(0, 255), random(0,255));
  }
  
  function draw() {
    fill("rgb(128,16,0)");
    stroke("rgb(9,250,250)");
    strokeWeight("3");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }