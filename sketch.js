let cor;
let x; // posição horizontal
let y; // posição vertical

function setup() {
  
  createCanvas(400, 400);
  background(color(230, 0, 0));
  
  cor=color(random(0, 255), random(0, 255), random(0, 255))
  
  x=200;
  y=200
  
  stroke("white")
}

function draw() {
  
  fill(cor)
  circle(x, y, 50);
  
  if(mouseX > x) {
    
    x=x-1;
  }
  
  if(mouseY < y) {
    
    y--;
  }
  
  if(mouseY > y){
    
    y++;
 }
  
  if(mouseIsPressed) {
    
    cor=color(random(0, 255), random(0, 255), random(0, 255), random(0, 100))
  }
}