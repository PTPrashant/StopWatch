let miliSec = 0;
let sec = 0;
let minute = 0;
var Variable;

let targetArea = document.getElementById("timeLapseArea");

function startButton(){
    clearInterval(Variable);

   Variable = setInterval(startStopWatch, 10);
}

function stopButton(){
    
    
    clearInterval(Variable);

}

function resetButton(){
    clearInterval(Variable);
    document.getElementById("miliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    sec = 0;
    miliSec = 0;
    minute = 0;
    targetArea.innerHTML = "";

}

function startStopWatch(){

    if (miliSec < 10){
        document.getElementById("miliseconds").innerHTML = "0" + miliSec;
    }

    if(miliSec> 9){
        document.getElementById("miliseconds").innerHTML = miliSec;

    }

    if(miliSec>99){
        miliSec = 0;
        document.getElementById("miliseconds").innerHTML = "00";
        sec = sec + 1;
    }
    if (sec > 0){
        document.getElementById("seconds").innerHTML = "0"+ sec;
    }
    if(sec>9){
        document.getElementById("seconds").innerHTML = sec;
    }

    if ( sec > 59){
        sec = 0;
        document.getElementById("seconds").innerHTML = "00";
        minute = minute +1;

    }

    if (minute < 10){
        document.getElementById("minutes").innerHTML = "0"+ minute;
    }
    if (minute > 9){
        document.getElementById("minutes").innerHTML = minute;
    }

    miliSec ++;



}

function timeLapse(){
    
    let innerMiliSec = document.getElementById("miliseconds").innerHTML;
    let innerSec = document.getElementById("seconds").innerHTML;
    let innerMin = document.getElementById("minutes").innerHTML;


    targetArea.insertAdjacentHTML("beforeend", innerMin + ":"+ innerSec + ":" + innerMiliSec + "<br>" );

}