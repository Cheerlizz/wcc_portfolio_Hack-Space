let canvas;
let button;
let slider;

let displayState = 0;



let a;
a=10;
let myFont;
function preload() {
  myFont = loadFont('Play Pretend.otf');
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  addGUI();

  //createCanvas(1140, 900);
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('p5*js', 10, 50);
}

function draw() {
  angleMode(DEGREES);
  background(40);

  let h = hour();
  let m = minute();
  let s = second();
  let mls= millis();
  


  let degHour=map(h*60,0,24*60,0,720);
  let degMinute=map(m,0,60,0,360);
  let degSecond=map(s,0,60,0,360);
  let degMillis=map(mls%1000,0,1000,0,360);


  noStroke(); 

  fill(50, slider.value(),100);
  //fill(255,255);
  textSize(16);
  text('Current time:\n' + h + " : " + m + " : "+s+ " : "+mls%1000, 50, 650);


  strokeWeight(1);
  stroke(50, slider.value(),100);

  noFill();

  let originX = width/2;
  let originY = height/2+height/10;

   for(let i=0;i<=16;i++){
    let x=originX+(220-8*i)*sin(degHour);
    let y=originY-(220-8*i)*cos(degHour);
    ellipse(x,y,(i+24)*16,(i+24)*16);

   }

   strokeWeight(1);
   
   for(let i=0;i<=12;i++){
    let x=originX+220*sin(degHour)+(74-6*i)*sin(degMinute);
    let y=originY-220*cos(degHour)-(74-6*i)*cos(degMinute);
    ellipse(x,y,(i+20)*12,(i+20)*12);
   }

   //stroke(255);
   for(let i=0;i<=18;i++){
    let x=originX+220*sin(degHour)+74*sin(degMinute)+(56-3*i)*sin(degSecond);
    let y=originY-220*cos(degHour)-74*cos(degMinute)-(56-3*i)*cos(degSecond);
    ellipse(x,y,(i+15)*7,(i+15)*7);
   }

   for(let i=0;i<=10;i++){
    fill(random(0,250),50,255,100);
    noStroke();
    let x=originX+220*sin(degHour)+74*sin(degMinute)+56*sin(degSecond)+(32-3*i)*sin(degMillis);
    let y=originY-220*cos(degHour)-74*cos(degMinute)-56*cos(degSecond)-(32-3*i)*cos(degMillis);
    ellipse(x,y,(i+3)*7.5,(i+3)*7.5);
   }


}

function addGUI()
{
  //add a slider
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  // Create a label for the slider
  var label = createElement("label", "Color");
  label.addClass("slider-label");
  label.parent("gui-container");

}




function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}