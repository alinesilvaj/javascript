function contar() {
var ini = document.getElementById('txtini')
var end = document.getElementById('txtend')
var pas = document.getElementById('txtpas')
var res = document.getElementById('res')

if (ini.value.length == 0 || end.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
} else {
    res.innerHTML = 'Contando: <br>'
    var inicio = Number(ini.value)
    var fim = Number(end.value)
    var passo = Number(pas.value)
    if (passo <= 0) {
        window.alert('Passo inválido! O passo será considerado = 1.')
        passo = 1
    }
    if (inicio < fim) {
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        for(var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
} 