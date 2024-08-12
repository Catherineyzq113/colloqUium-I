function setup() {
    createCanvas(windowWidth, 400);
    noFill();
    stroke(255);
    frameRate(30);
  }
  
  let aiContentGrowth = 0;
  let fraudGrowth = 0;
  let aiContentRate = 0.5; // Growth rate for AI-generated content
  let fraudRate = 0.2; // Growth rate for fraud
  
  function draw() {
    background(0);
    
    // Update growth values
    aiContentGrowth += aiContentRate;
    fraudGrowth += fraudRate;
    
    // Adjust growth rates to simulate acceleration
    aiContentRate *= 1.01;
    fraudRate *= 1.015;
    
    // Draw AI-generated content growth
    stroke(0, 255, 0);
    strokeWeight(3);
    line(100, height - 50, 100 + aiContentGrowth, height - 50 - aiContentGrowth / 4);
    textSize(16);
    fill(0, 255, 0);
    text("AI-Generated Content", 100 + aiContentGrowth + 10, height - 50 - aiContentGrowth / 4);
    
    // Draw fraud growth
    stroke(255, 0, 0);
    strokeWeight(3);
    line(100, height - 150, 100 + fraudGrowth, height - 150 - fraudGrowth / 4);
    fill(255, 0, 0);
    text("Fraud Growth", 100 + fraudGrowth + 10, height - 150 - fraudGrowth / 4);
    
    // Stop animation when it reaches the end of the canvas
    if (aiContentGrowth > width - 200 || fraudGrowth > width - 200) {
      noLoop(); // Stop the draw loop
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, 400);
  }
  