const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// add callback functions as an object to trigger/emit that button has been clicked on browser


const timer = new Timer(durationInput, startButton, pauseButton,
    {
     onStart () {
        console.log("Time has started!!");
     },
     onTick() {
        console.log("Timer ticked down by 1 sec");
     },
     onComplete() {
        console.log("Time is Done");

     }   
    });


