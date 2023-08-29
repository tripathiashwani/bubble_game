
var timer=60;
var score=0;
var hitrn=0;
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}


function increase_score(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}


function makecircle(){
    var clutter="";

    for(var i=0;i<=180;i++){
        var rn=Math.floor(Math.random()*10)
        clutter+=`<div class="circle">${rn}</div>`
    }
    
    document.querySelector(".bottom").innerHTML=clutter;
} 


function runtimer(){
   var timer_= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else {
            clearInterval(timer_);
        }

    },1000);

}

document.querySelector(".bottom").addEventListener("click",function(dets){
    var k=Number(dets.target.textContent);
    if(k==hitrn){
        increase_score();

    }
    makecircle();
    getnewhit();
});


runtimer();
makecircle();
getnewhit();
