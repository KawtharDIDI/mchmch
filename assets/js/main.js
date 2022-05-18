var sign = document.getElementById("sign"),
    pop = document.getElementById("pop");
if(sign){
 sign.addEventListener('click',()=>{
    pop.classList.toggle("showing") ;
 })
}
