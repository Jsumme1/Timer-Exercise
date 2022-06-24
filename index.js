const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;

// add callback functions as an object to trigger/emit that button has been clicked on browser


const timer = new Timer(durationInput, startButton, pauseButton,
    {
     onStart (totalDuration) {
        console.log("Time has started!!");
        // how much time at onset
        duration = totalDuration;
     },
     onTick(timeRemaining) {
        // console.log("Tick!!")
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
       
     },
     onComplete() {
        console.log("Time is Done");

     }   
    });


