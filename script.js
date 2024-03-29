var sts = document.querySelector("#status")
var buton = document.querySelector("#add_remove")

indicate = 0
buton.addEventListener("click",function(){
    if(indicate == 0){
        sts.innerHTML="Friend"
        sts.style.color="green"
        buton.innerHTML="Remove Friend"
        buton.style.backgroundColor="red"
        indicate+=1
    }
    else{
        sts.innerHTML="Stranger"
        sts.style.color="red"
        buton.innerHTML="Add Friend"
        buton.style.backgroundColor="magenta"
        indicate-=1
    }
})