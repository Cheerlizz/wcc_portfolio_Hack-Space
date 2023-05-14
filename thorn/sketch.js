// The Thorn
// Created by Yuelin Guo on 27th Nov. 2022

// Inspired by Daniel Shiffman's L-System Fractal Trees 
// which defines a specific rule to generate the graph or sound
// Code for: https://editor.p5js.org/codingtrain/sketches/QmTx-Y_UP

// Instructions: click the "generate" button to start the iteration
// the sentences shown below the image tell the text outcome of each iteration
// variables: F + -
// axiom: F
// rules: (F → FF+-)


let axiom = "F";
let sentence = axiom;
let rad = 180;
let step =120;

let rules = [];
rules[0] = {
  a: "F",
  b:"FF+-"
}



function generate() {
  rad *= 0.5;
  //create the replacement for current sentence
  let nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    //replace the character only when there is a corresponding rule
    var found = false;
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    //keep the character if there is no rules can be applied
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  //createP(sentence);
  thorn();

}



function thorn(){
  //reset to the identity matrix each time call the function
  resetMatrix();
  translate(width / 2, height/2);
  noStroke();
  
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);

    //if the current character is "F", draw the thorn ar current origin
    if (current == "F") {
      drawAthorn();
    } 
    //if the current character is "+", draw abducent looped thorn
    else if (current == "+") {

      for(let j = 0; j <= 3; j++){
        push();
        rotate(j*2*PI/(i+1));
        translate(0,step);
        drawAthorn()
        pop();
      }
      
    } 
    //if the current character is "-", draw contractive looped thorn
    else if (current == "-") {
      for(let j = 0; j <= 3; j++){
        push();
        rotate(j*2*PI/(i+1));
        translate(0,-step);
        drawAthorn()
        pop();
      }
    }
    
  }


}

function drawAthorn() {
  //draw the lower thorn
  for(let k =0; k<12; k++){
    push();
    rotate(k*PI/6);
    fill(255,74,198);
    triangle(rad,0,-rad,0,0,-2*rad);
    pop();
  }
  //draw the upper thorn
  for(let k =0; k<12; k++){
    push();
    rotate(k*PI/6);
    fill(255,41,32);
    triangle(rad,0,-rad,0,0,-3*rad/2);
    pop();
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  addGUI();
  background(41,24,16);
  //createP(axiom);
  thorn();
  //var button = createButton("generate");
  
}

function addGUI()
{
  //add a slider
  button = createButton("generate");
  button.addClass("button");
  //Add the slider to the parent gui HTML element
  button.parent("gui-container");
  button.mousePressed(generate);

}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}