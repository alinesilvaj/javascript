function gerar() {
    var valor = document.getElementById('valor')
    //var res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    if (valor.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        var n = Number(valor.value)
        //res.innerHTML = `Tabuada do ${n}: <br>`
        // for (c = 1; c <= 10; c++) {
        //     res.innerHTML += `${n} x ${c} = ` + (n * c) + <br>'
        // }
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}