

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;



function start(){
  if(timer !== null){return};


     timer = setInterval(() =>{
      seconds++;
      if(seconds === 60){
        minutes++;
        seconds = 0;
      }
      if(minutes === 60){
        minutes = 0;
        hours++;
        
      }

      updatedisplay();

    },1000);

}

function updatedisplay(){

const countstring = document.getElementById("display");
const h = hours.toString().padStart(2,"0");
const m = minutes.toString().padStart(2,"0");
const s = seconds.toString().padStart(2,"0");
countstring.textContent = `${h}:${m}:${s}`;


}


function stop(){

clearInterval(timer);
timer = null;

}


function reset(){
timer = null;
clearInterval(timer);
const countstring = document.getElementById("display");
hours = 0;
minutes = 0;
seconds = 0;
const h = hours.toString().padStart(2,"0");
const m = minutes.toString().padStart(2,"0");
const s = seconds.toString().padStart(2,"0");
countstring.textContent = `${h}:${m}:${s}`;
 


}
