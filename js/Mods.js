let darkBtn = document.getElementById("darkMode")
let lightBtn = document.getElementById("lightMode")
let modsBg = document.getElementById("mods")
let modsTitle = document.getElementById("mods__title")
let modsSub = document.getElementById("mods__subtitle")
let modsdescr = document.getElementById("mods__descr")

lightBtn.addEventListener('click',function(){
    modsBg.style.background='white'
    modsTitle.style.color='black'
    modsSub.style.color='black'
    modsdescr.style.color='black'
    lightBtn.style.filter="invert(59%) sepia(98%) saturate(1950%) hue-rotate(353deg) brightness(104%) contrast(104%)"
    darkBtn.style.filter = "invert(91%) sepia(93%) saturate(24%) hue-rotate(200deg) brightness(107%) contrast(100%)"
})
darkBtn.addEventListener('click',function(){
    modsBg.style.background='#222222'
    modsTitle.style.color='white'
    modsSub.style.color='white'
    modsdescr.style.color='white'
    darkBtn.style.filter="invert(59%) sepia(98%) saturate(1950%) hue-rotate(353deg) brightness(104%) contrast(104%)"
    lightBtn.style.filter = "invert(0%) sepia(0%) saturate(7451%) hue-rotate(137deg) brightness(97%) contrast(100%)"
})
