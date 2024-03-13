let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value)) {
        let n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `lista${n}`
        lista.appendChild(item)       
    } else {
        window.alert('Valor inválido!')
    }    
}

function finalizar() {
    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    const ordemCrescente = valores.sort()
    res.innerHTML += `<p>O maior valor encontrado foi ${ordemCrescente[ordemCrescente.length - 1]}.</p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${ordemCrescente[0]}.</p>`
    const soma = valores.reduce(
        (prev, current) => prev + current
    )
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    const media = soma / valores.length
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
} 