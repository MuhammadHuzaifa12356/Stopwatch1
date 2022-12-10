 var min=0;
var sec=0;
var millisecond=0;
var displayMin=document.getElementById("displayMin");
var displaySec=document.getElementById("displaySec");
var displayMilliSec=document.getElementById("displayMilliSec");

function timer(){
    millisecond++;
    if(millisecond==10){
        millisecond=0;
        sec++;
        if(sec==60){
            min++;
            sec=0;
        
         }
    }
 
 displayMilliSec.innerHTML=millisecond;
 displaySec.innerHTML=sec;
 displayMin.innerHTML=min; 
}
function starttimer(){
    interval=setInterval
    (function()
    {
        timer();
    },100);
}
function pausetimer(){
    clearInterval(interval);
}
function resettimer(){
    pausetimer();
    min=0;
    sec=0;
    millisecond=0;
    displayMilliSec.innerHTML=millisecond;
    displaySec.innerHTML=sec;
    displayMin.innerHTML=min;
}
