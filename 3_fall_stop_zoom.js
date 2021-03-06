"use strict"

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling
const propertiesFalling = {
  duration: 1000, 
  iterations: Infinity, 
  // direction: "alternate", 
  // easing: "ease-in-out"
}; 

const keyframesFalling = [
  //Translates Y -20vw to 65vw, infinately, taking 1 second 
  //Can also be transform: 'translate(0,-20vw)'
  {transform: 'translateY(-20vw)'},
  {transform: 'translateY(65vw)'}
  ]; 

  // Create keyframes and properties zoom
const propertiesZoom = {
  duration: 500, 
  iterations: 1, 
  // direction: "alternate", 
  // easing: "ease-in-out", 
  fill: 'forwards', 
  composite: 'add'
}; 

const keyframesZoom = [
  //Scales from 1 to 0 in a half second, only once, using fill:forwards
  {transform: 'scale(1)'},
  {transform: 'scale(0)'}
  ]; 

// register click
document.querySelector("#ball").addEventListener("mousedown", ballClicked); 

// start falling animation
//fallAnimation is just a name for the animation
const fallAnimation = ball.animate(keyframesFalling, propertiesFalling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fallAnimation.pause();

  // start zoom-animation
  //zoomAnimation is just a name for the animation
  const zoomAnimation = ball.animate(keyframesZoom, propertiesZoom);
  
  //New exercise
  //when the zoom animation finishes 
  zoomAnimation.onfinish = () =>{
    //cancel the zoomAnimation
    zoomAnimation.cancel(); 
    //sets the current time to 0, so the animation will start from the beginning
    fallAnimation.currentTime = 0; 
    //play the fallingAnimation again 
    fallAnimation.play(); 
  }; 

}
