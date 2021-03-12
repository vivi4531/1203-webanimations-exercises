"use strict";

const properties = {
  duration: 1000, 
  iterations: Infinity, 
  direction: "alternate", 
  easing: "ease-in-out"
}; 

//Create an array of keyframes with objects inside
//Each keyframe is an object with properties to animate and values to animate them to 
const keyframes = [
{transform: 'translate(0,41.25vw)'}, 
{transform: 'translate(0,0)'}
]; 

//Select the #ball (you could also use the class .bounce)
const ball = document.querySelector("#ball"); 

//Animate the ball with the keyframes and properties you just defined
const animation = ball.animate(keyframes, properties); 

/* 
  properties from the CSS
.bounce {
  animation-name: bounce_kf;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
*/

/*
 keyframes from the CSS
@keyframes bounce_kf {
  from {
    transform: translate(0,41.25vw);
  }
  to {
    transform: translate(0,0);
  }
}
*/

