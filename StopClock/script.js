let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let hr=0;
let min=0;
let sec=0;
let ms=0;
start.addEventListener("click",()=>{
    timer=true;
    stopWatch();
});
stop.addEventListener("click",()=>{
    timer=false;
})
reset.addEventListener("click",()=>{
    timer=false;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("millisec").innerHTML="00";
})

function stopWatch(){
    if(timer){
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }

        if(sec==60){
            min++;
            sec=0;
        }

        if(min==60){
            hr++;
            min=0;
        }
        let hrString=hr;
        let minString=min;
        let secString=sec;
        let msString=ms;

        if(hr<10){
            hrString="0"+hrString;
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }
        if(ms<10){
            msString="0"+msString;
        }
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("millisec").innerHTML=msString;
        setTimeout(stopWatch,10)
    }
}