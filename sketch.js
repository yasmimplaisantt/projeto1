function setup() { 
    createCanvas (700,  700);  
       background("purple");
  
}

function draw() {
  
   stroke("green");
   fill("blue");
  
    if(mouseIsPressed){
     circle(mouseX, mouseY, 15, 15);
    } 
} 