let password = document.getElementById("password")

let panda = document.getElementById("panda")

password.addEventListener("focus",function(){

panda.classList.add("cover")

})

password.addEventListener("blur",function(){

panda.classList.remove("cover")

})