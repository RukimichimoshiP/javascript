const inputNumber = document.querySelector('input#numero')
const btnAdicionar = document.querySelector('input#btnAdicionar')
const selectNumeros = document.querySelector('select#numeros')
const btnAtualizar = document.querySelector('button#btnAtualizar')
const mostrarRes = document.querySelector('div#mostrarRes')

let numeros = []

function adicionarNaArray(num) {
    if (num != '' && numeros.indexOf(num) == -1 && num >= 1 && num <= 100) {
        numeros.push(num)
        return true
    } else {
        alert('Valor invalido ou já encontrado na lista.')
        return false
    }
}

btnAdicionar.addEventListener('click', () => {
    const confirm = adicionarNaArray(Number(inputNumber.value))

    if (confirm) {
        selectNumeros.innerHTML = ''

        for (i in numeros) {
            const item = document.createElement('option')
            item.text = `Valor ${numeros[i]} adicionado`
            selectNumeros.appendChild(item)
        }

        mostrarRes.innerHTML = ''
    }

    inputNumber.focus()
    inputNumber.value = ''
})

btnAtualizar.addEventListener('click', () => {
    mostrarRes.innerHTML = ''

    let menorValor = numeros[0]
    let maiorValor = 0
    let soma = 0

    for (i in numeros) {
        soma += numeros[i]

        if (numeros[i] > maiorValor) {
            maiorValor = numeros[i]
        } else if (numeros[i] < menorValor) {
            menorValor = numeros[i]
        }
    }

    if (numeros.length > 0) {
        mostrarRes.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados</p>`

        mostrarRes.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`

        mostrarRes.innerHTML += `<p>O menor valor informado foi ${menorValor}</p>`

        mostrarRes.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        mostrarRes.innerHTML += `<p>A média dos valores digitados é ${soma / numeros.length}.</p>`
    } else {
        alert('Adicione valores antes de finalizar!')
    }
})