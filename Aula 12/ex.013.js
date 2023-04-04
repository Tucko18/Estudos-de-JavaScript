var agora = new Date()
var hora = agora.getHours ()
var calculo = hora - 12
if (hora <= 12 && hora >= 0){
console.log(`Agora são exatamente ${hora} horas.`)
}else {
    console.log(`Agora são exatamente ${calculo} horas.`)
}
if (hora >= 7 && hora <= 12) {
    console.log('Bom Dia !')
}else if (hora >= 13 && hora <= 18) {
    console.log('Boa Tarde')
}else if (hora >= 19 && hora <= 24) {
    console.log ('Boa Noite !')
}else if (hora >= 0 && hora <= 6 ) {
    console.log ('Boa Madrugada !')
}
