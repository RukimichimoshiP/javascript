const inputInicio = document.querySelector('input#inicio')
const inputFim = document.querySelector('input#fim')
const inputPasso = document.querySelector('input#passo')
const btnContar = document.querySelector('input#contar')
const res = document.querySelector('div#res')

btnContar.addEventListener('click', () => {
    if (inputInicio.value == '' || inputFim == '' || inputPasso == '') {
        alert('Lembre-se de preencher todos os campos')
    }
    else {
        if (Number(inputPasso.value) == 0) {
            alert('Passo inválido! Considerando PASSO sendo 1')
            inputPasso.value = '1'
        }

        res.innerHTML = ''

        if (Number(inputInicio) >= Number(inputFim)) {
            for (let i = Number(inputInicio.value); i <= Number(inputFim.value); i += Number(inputPasso.value)) {
                res.innerHTML += i + ' 👉'
            }
        } else {
                for (let i = Number(inputInicio.value); i >= Number(inputFim.value); i -= Number(inputPasso.value)) {
                    res.innerHTML += i + ' 👉'
                }

            res.innerHTML += ' 🏁'
        }
    }
})