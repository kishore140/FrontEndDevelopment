let hour=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ampm=document.getElementById("ampm");
function clock(){
    const time=new Date();
    let h=time.getHours();  
    let m=time.getMinutes();
    let s=time.getSeconds();
    

    if(h>12){
        h=h-12;
        ampm="PM";
    }

    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    ampm.innerHTML=ampm;

    setTimeout(clock,1000)
}
clock();