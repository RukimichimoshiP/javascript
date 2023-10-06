function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(' [ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let img = document.createElement('img')
        let genero = ''

        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <= 3){
                // Bebe
                img.setAttribute('src', 'img/bebe-menino.jpg')
            }else if(idade < 10){
                // crianca
                img.setAttribute('src', 'img/crianca-menino.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'img/jovem-menino.jpg')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'img/adulto-homem.jpg')
            }else{
                // idoso
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade <= 3){
                // Bebe
                img.setAttribute('src', 'img/bebe-menina.jpg')
            }else if(idade < 10){
                // crianca
                img.setAttribute('src', 'img/crianca-menina.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'img/jovem-menina.jpg')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'img/adulta-mulher.jpg')
            }else{
                // idoso
                img.setAttribute('src', 'img/idosa-mulher.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}