const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('#navbar');
const active = document.getElementsByClassName('active');


let overlay = document.querySelector('.overlay')
let btnBox = document.querySelector('.btnBox')
let closeBtn = document.querySelector('.closeBtn')
let modelOverlay = document.querySelector('.model-overlay')
let user = document.querySelector('#user')
let loginBtn = document.querySelector('#loginBtn')

user.addEventListener('click',() => {
    btnBox.classList.add("hidden")
    overlay.classList.add("showDisplay")
    modelOverlay.classList.add("showModel")
    document.style.backgroundColor = "black"
})

loginBtn.addEventListener('click', () => {
    btnBox.classList.remove("hidden")
    overlay.classList.remove("showDisplay")
    modelOverlay.classList.remove("showModel")
})

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}