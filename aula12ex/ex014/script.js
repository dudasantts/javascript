function carregar() {
    var msg = window.document.getElementById('msg')
    // var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {

        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
      
        window.document.body.style.background = '#bd6d57ff'
    } else {
         
        window.document.body.style.background = '#232323ff'
    }

}