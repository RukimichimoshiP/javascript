const inputNumber = document.getElementById('numero')
const btnCalc = document.getElementById('buttonTabuada')
const multiplicationTable = document.getElementById('tabuada')

function calc(){
    if(inputNumber.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        let n = Number(inputNumber.value)

        multiplicationTable.innerHTML = ''
        for(i = 1; i <= 10; i++){
            let item = document.createElement('option')

            item.text = `${n} x ${i} = ${n*i}`
            multiplicationTable.appendChild(item)
        }
    }
}