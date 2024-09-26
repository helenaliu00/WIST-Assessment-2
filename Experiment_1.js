function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  textAlign(CENTER, CENTER);
  //INSTRUCTIONS
  textSize(40);
  textFont("Bebas Neue");
  fill(color(154, 194, 230));
  text("GIVE ME HAIR!", 200, 150)
}

function draw() {
  
//FACE
  fill(color(255, 233, 207));
  noStroke();
  circle(width / 2, height / 3, 300, 300); 
    fill(color(255, 233, 207));
  noStroke();
  rect(width / 2 - 50, height / 3, 100, 200); // Left vertical bar
      fill(color(154, 194, 230));
  noStroke();
  rect(width / 2 - 150, height / 3 + 175, 300, 300); // Left vertical bar
    stroke("black");
    strokeWeight(10);
  noFill();
  circle(width / 2 + 75, height / 3, 50, 300); 
    stroke("black");
  noFill();
  circle(width / 2 - 75, height / 3, 50, 300); 
  
  //EARS
      fill(color(255, 233, 207));
  noStroke();
  circle(width / 2 - 150, height / 3, 50, 300); 
      fill(color(255, 233, 207));
  noStroke();
  circle(width / 2 + 150, height / 3, 50, 300); 
  
  textSize(40);
  textFont("Bebas Neue");
  fill(color(255, 159, 133));
  text("u", width / 2, height / 3 + 80);
  
  textFont("Bebas Neue");
  fill("pink");
  text("///", width / 2 - 75, height / 3 + 60);
  textFont("Bebas Neue");
  fill("pink");
  text("///", width / 2 + 75, height / 3 + 60);
  
  push();
  translate(width / 2 - 150, height / 3);
  rotate(radians(-180));
  text("3", 0, 0);
  pop();
  
  push();
  translate(width / 2 + 150, height / 3);
  rotate(radians(0)); 
  text("3", 0, 0); 
  pop();
  
   push();
  translate(width / 2 + 75, height / 3 - 40);
  rotate(radians(-90)); 
  text(")", 0, 0); 
  pop();
  
   push();
  translate(width / 2 - 75, height / 3 - 40);
  rotate(radians(-90)); 
  text(")", 0, 0); 
  pop();
  
     push();
  translate(width / 2 + 75, height / 3 - 60);
  rotate(radians(-90)); 
  textSize(60);
  fill("black");
  text(")", 0, 0); 
  pop();
  
   push();
  translate(width / 2 - 75, height / 3 - 60);
  rotate(radians(-90)); 
  textSize(60);
  fill("black");
  text(")", 0, 0); 
  pop();


  //HAIR
  textSize(20);
  textFont("Bebas Neue");
  fill("black");

  if (mouseIsPressed) {
    text("HAIR", mouseX, mouseY);
}}
