const year=document.getElementById("year");
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const mins=document.getElementById("mins");
const secs=document.getElementById("secs");
const time=new Date();
year.innerHTML=time.getFullYear()+1;

let nextYear="Jan 1, "+(time.getFullYear()+1)+" 00:00:00"
const next=new Date(nextYear);

function change(){
    const gap=next-new Date().getTime();
    const sec=1000;
    const min=sec*60;
    const hour=min*60;
    const day=hour*24;
    const d=Math.floor((gap/day));
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/min);
    const s=Math.floor((gap%min)/sec);
    days.innerHTML=d;
    hours.innerHTML=h;
    mins.innerHTML=m;
    secs.innerHTML=s;

    setTimeout(change,1000);
}
change();