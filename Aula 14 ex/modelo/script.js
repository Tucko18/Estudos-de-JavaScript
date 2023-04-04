function calcular(){
    let peso = document.getElementById ('txtp')
    let altu = document.getElementById ('txta')
    let res = document.getElementById ('res')
    let met = document.getElementById ('met')
    var img = window.document.getElementById('imagen')
        if (peso.value.length == 0 || altu.value.lenght == 0){
            window.alert `ponha informações nos quadrados abaixo`
        }else{
           
            var p = Number (peso.value)
            var a = Number (altu.value)
            var e = Number (a*a)
            var y = Number (a**1)
            var r = (p/a**2)
            var h = Number (r.value)
        
            res.innerHTML = `seu imc é de <strong>${r}</strong> `
                 
        if (r >= 0 && r <= 18.5  ){
            met.innerHTML = 'Você está <strong>subpeso</strong>'
           /* img.src = 'subpeso.png'*/
         
        }else if (r >= 18.5 && r <= 25 ){
            met.innerHTML = 'Você está <strong>saudável</strong>'
           /* img.src = 'saudavel.png'*/
        }else {
            met.innerHTML = 'Você está <strong>sobrepeso</strong>'
          /*img.src = 'sobrepeso.png' */
        }
        
        } 
        
       

}