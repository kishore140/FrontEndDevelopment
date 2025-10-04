const password=document.getElementById("password");
const powerpoint=document.getElementById("power-point");
color=['red','orange','yellow','skyblue','green']
width=['1%','25%','50%','75%','100%']
pattern=[/[0-9]/,/[a-z]/,/[A-Z]/,/[^a-zA-Z0-9]/]
password.addEventListener("input", function() {
    let value = password.value;
    console.log(value)
    let index=0;
    if(value.length>6){
        pattern.forEach((item) => {
            if(item.test(value)){
                index+=1;
            }
        })
    }
    powerpoint.style.width=width[index]
    powerpoint.style.backgroundColor=color[index]
});