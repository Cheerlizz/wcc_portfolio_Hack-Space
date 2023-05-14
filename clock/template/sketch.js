let canvas;
let button;
let slider;

let displayState = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  rectMode(CENTER);

  addGUI();
}

function draw() {
  background(200,200,250);
  
  noStroke();
  fill(slider.value());

  if(displayState == 0){
    circle(width/2,height/2,width/6);
  }else{
    rect(width/2,height/2,width/6,width/6);
  }

}

function addGUI()
{
  //add a slider
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  //add a button
  if(displayState == 0)
  {
      button = createButton("Change to Square");
  }else if(displayState == 1){
      button = createButton("Change to Circle");
  }

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    
  if(displayState < 1)
  {
    displayState++;
  }else{
    displayState = 0;
  }

  if(displayState == 0)
  {
      button.html("Change to Square");
  }else if(displayState == 1){
      button.html("Change to Circle");
  }
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}