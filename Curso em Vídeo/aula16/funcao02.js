function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(7, 3))

lista = [1, 2, 5]
function inLista(n) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

console.log(inLista(0))