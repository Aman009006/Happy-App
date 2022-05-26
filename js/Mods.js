let darkBtn = document.getElementById("darkMode")
let lightBtn = document.getElementById("lightMode")
let section = document.getElementById("mods")

lightBtn.addEventListener('click',function(){
    section.classList.add("ligth__mode")
})
darkBtn.addEventListener('click',function(){
    section.classList.remove("ligth__mode")
})