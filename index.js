let moon = document.getElementById('moon')
let stars = document.getElementById('stars')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let button = document.getElementsByClassName('btn') 
let text = document.getElementsByClassName('text')

window.addEventListener('scroll',function(){
let value = window.scrollY
stars.style.left = value * 0.025 +'px'
moon.style.top = value * 1.05 + 'px'
mountains_behind.style.top = value + 0.5 + 'px'
mountains_front.style.top = value + 0.5 + 'px'
text.style.marginRight = value + 4 + 'px'
})
console.log('Ola')
console.log('hola que ta')