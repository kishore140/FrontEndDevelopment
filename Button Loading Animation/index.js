const submit=document.getElementById("submit");
const loader=document.getElementById("loader");
const form=document.getElementById("form");

submit.addEventListener("click",function(){
    submit.disable=true;
    loader.style.display='inline-block';
    setTimeout(function(){
        submit.disable=false;
        loader.style.display="none";
        form.reset()
    },2000);
});