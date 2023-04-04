function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
     window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero 
       var img = document.createElement('img')
       img.setAttribute("id", 'foto')
    if(fsex[0].checked) {
           gênero = 'Homen'
           if (idade >= 0 && idade <= 12) {
           //criança
           img.setAttribute('src', 'bebe.homen-removebg-preview (1).png' )
           }else if (idade >= 13 && idade <= 21){
               //adolescente
               img.setAttribute('src', 'adolescente.homen-removebg-preview.png' )
           }else if (idade < 50){
               //adulto
               img.setAttribute('src', 'adulto.homen-removebg-preview (1).png' )
           }else if (idade < 112 ) {
           //velhooo
           img.setAttribute('src', 'veio.homen__1_-removebg-preview.png' )
           }else {
               img.setAttribute('src', 'vamps-removebg-preview.png' )
           }
       } else if (fsex[1].checked) { 
           gênero = 'Mulher'
           if (idade >= 0 && idade <= 12) {
               //criança
               img.setAttribute('src', 'bebe.mulher-removebg-preview.png' )
               }else if (idade >= 13 && idade <= 21){
                   //adolescente
                   img.setAttribute('src', 'adolescente.mulher-removebg-preview.png' )
               }else if (idade < 50){
                   //adulto
                   img.setAttribute('src', 'adulta.mulher-removebg-preview.png' )
               }else if (idade < 112 ) {
               //velhooo
               img.setAttribute('src', 'veia.mulher-removebg-preview (1).png' )
               }else {
                img.setAttribute('src', 'vamps-removebg-preview.png' )
            }
            }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
           
        }
    }