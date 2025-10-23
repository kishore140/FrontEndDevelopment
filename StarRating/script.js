let starts=document.getElementsByClassName("star");
let output=document.getElementById("output");

function fun(n){
    remove();
    for(i=0;i<n;i++){
        if(n==1){
            cls="one";
        }
        else if(n==2){
            cls="two";
        }
        else if(n==3){
            cls="three";
        }
        else if(n==4){
            cls="four";
        }
        else{
            cls="five";
        }
        starts[i].className="star "+cls;
    }
    output.innerHTML="Rating is "+n +"/5";
}

function remove(){
    for(i=0;i<5;i++){
        starts[i].className="star"
    }

}