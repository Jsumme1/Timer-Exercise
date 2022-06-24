class Timer {
    constructor (durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton =  startButton;
        this.pauseButton =  pauseButton;
        // check to see if callbacks is present (optionality)
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
// This will not allow access to "this" for the new timer instance
// start(){
//     console.log("time to start the timer!");
//     }

start = () => {
    console.log("time to start the timer!");
    // if callback functions present (not necessary in this case - example)
    if(this.onStart) {
        this.onStart();
    }
    this.tick();
    this.interval= setInterval(this.tick, 1000);
 };
    
 pause = () => {
    clearInterval(this.interval);
 };
 
 tick = () => {
    if(this.timeRemaining <= 0) {
        this.pause();
        if(this.onComplete) {
            this.onComplete();
        }

    } else {
        this.timeRemaining = this.timeRemaining -1;
        if (this.onTick){
            this.onTick();
        }
    }
 };

// getter and setter functions to refactor code when data stored in JS as opposed to brower
get timeRemaining () {
    return parseFloat(this.durationInput.value);
}

set timeRemaining (time) {
    this.durationInput.value = time;
}

}

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


