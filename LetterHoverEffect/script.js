document.querySelectorAll(".container span")
.forEach((element)=>element,addEventListener(
    "mouseover",(e)=>bounce(e.target)
))

function bounce(element){
    if(!element.classList.contains("bounce")){
        element.classList.add("bounce");
        setTimeout(()=>{
            element.classList.remove("bounce");
        },1500)
    }
}