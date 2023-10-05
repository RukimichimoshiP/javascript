let agora = new Date()
let horas = agora.getHours()

let txt = document.querySelector('div#texto')
let img = document.querySelector('div#imagem')
let corpo = document.getElementsByTagName('body')[0]

txt.innerHTML = `<p>Agora são ${horas} horas.</p>`

if(horas < 6){
    img.innerHTML = '<img src="imagens/madrugada.jpg" alt="Foto Madrugada"></img>'
    corpo.style.backgroundColor = '#000'
}else if(horas < 12){
    img.innerHTML = '<img src="imagens/manha.jpg" alt="Foto Manhã"></img>'
    corpo.style.backgroundColor = '#D1BF94'
}else if(horas < 18){
    img.innerHTML = '<img src="imagens/tarde.jpg" alt="Foto Tarde">'
    corpo.style.backgroundColor = '#AB7A66'
}else{
    img.innerHTML = '<img src="imagens/noite.jpg" alt="Foto Noite">'
    corpo.style.backgroundColor = '#4A4B4C'
}