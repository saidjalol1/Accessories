// let bar = document.querySelector("#bar");
let menu = document.querySelector("#mobile")
let leave = document.querySelector("#leave")
let bar = document.querySelector("#bar")
let katalog = document.querySelector("#katalog")
let push = document.querySelector("#push")
let back = document.querySelector("#back");


bar.addEventListener("click" , bar=>{
    bar.preventDefault();

    menu.classList.remove("hidden");
})
leave.addEventListener("click" , evt=>{
    evt.preventDefault();

    menu.classList.add("hidden");
    push.classList.add("hidden");
})
katalog.addEventListener("click" , evt =>{
    evt.preventDefault();

    push.classList.remove("hidden");
    
})
back.addEventListener("click" , back=>{
    back.preventDefault();
    
    push.classList.add("hidden")
})