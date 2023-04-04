function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora =  data.getHours()
    var minut = data.getMinutes()
    var relo = window.document.getElementById('relo')
    msg.innerText = `Agora são ${hora} horas e ${minut} minutos.`
   if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'Foto manhã.png'
    document.body.style.background = ' #FD895D'
   } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'Foto tarde.png'
    document.body.style.background = '#DD8E79'
   }else {
    //boa noite
    img.src = 'Foto noite.png'
    document.body.style.background = '#071C1F'
   }
   relo.innerText = `${hora}:${minut}`

    }