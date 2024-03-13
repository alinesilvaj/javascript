function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   var img = document.getElementById('imagem')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Ano inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        if (fsex[0].checked) {
            genero = 'mulher'
            // var img = document.createElement('img')
            // img.setAttribute('id', 'foto')
            if (idade >= 0 && idade < 10) {
                img.src = 'bebê-mulher.png'
                //img.setAttribute('src', 'bebê-mulher.png')
            } else if (idade < 36) {
                img.src = 'jovem-mulher.png'
            } else if (idade < 50) {
                img.src = 'adulta-mulher.png'
            } else {
                img.src = 'idosa-mulher.png'
            }
        } else if (fsex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'bebê-homem.png'
            } else if (idade < 36) {
                img.src = 'jovem-homem.png'
            } else if (idade < 50) {
                img.src = 'adulto-homem.png'
            } else {
                img.src = 'idoso-homem.png'
            }
        }
        // res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // res.appendChild(img)
    }

}