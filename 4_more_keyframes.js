"use strict";
//New exercise 
//Get the size of the ball and the stage, with getBoundingClientRect()
const stageSize = document.querySelector("#stage").getBoundingClientRect(); 
const ballSize = document.querySelector("#ball").getBoundingClientRect();

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling
const multipleProperties = {
  duration: 3000, 
  iterations: Infinity, 
  // direction: "alternate", 
  // easing: "ease-in-out"
}; 

const multipleKeyframes = [
//Create an array of four keyframes, where you translate the ball
 /*  {transform: 'translate(42vw,0vw)'},
  {transform: 'translate(85vw,20vw)'}, 
  {transform: 'translate(42vw,41vw)'}, 
  {transform: 'translate(0vw,20vw)'}, 
  {transform: 'translate(42vw,0vw)'} */

  //New exercise 
  //Calculate the x and y values for each keyframe
  {transform: `translate(${stageSize.width/2 - ballSize.width/2}px,0)`},
  {transform: `translate(${stageSize.width - ballSize.width}px)`},
  {transform: `translate(${stageSize.width/2 - ballSize.width/2}px,${stageSize.height-ballSize.height}px)`},
  {transform: `translate(0px,${stageSize.height/2-ballSize.height/2}px)`}

  ]; 

  multipleKeyframes.push(multipleKeyframes[0]); 

//Start animation 
//const multipleKeyframesAnimation = ball.animate(multipleKeyframes, multipleProperties);
ball.animate(multipleKeyframes, multipleProperties); 