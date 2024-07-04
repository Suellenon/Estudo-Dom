document.getElementById("ola").innerHTML = "Hello World"
document.getElementById("ola").style.backgroundColor = "blue"
const centrais = document.getElementsByClassName('centralizar')

centrais[0].style.textAlign = "center"
centrais[1].style.textAlign = "center"

for(var i = 0; i < centrais.length; i++){
    centrais[i].style.backgroundColor = "yellow"
}

const btn_aviso = document.querySelector('#btn-aviso')
btn_aviso.addEventListener('click', function(){
    alert("Oi")
})


const novo = document.createElement('img')
novo.src = "https://picsum.photos/200/300?random=1"
novo.style.border = "1px solid black"
novo.setAttribute('title', 'Inserido')
document.querySelector('body').appendChild(novo)


let nome = prompt("Qual seu nome?")

const nome_place = document.createElement('h1')
nome_place.innerHTML = nome 
document.querySelector('body').appendChild(nome_place)