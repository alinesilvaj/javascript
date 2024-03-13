function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() + ':' + data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (data.getHours() >= 0 && data.getHours() < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (data.getHours() >= 12 && data.getHours() < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f3bd6a'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#4e8abf'
    }
}

