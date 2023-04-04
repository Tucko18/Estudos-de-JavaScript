function contar() {
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res') 
    let dados = document.getElementById('dados')
    if (ini.value.length == 0 || fim.value.length == 0 ){
        res.innerHTML = 'IMPOSSÍVEL CONTAR!'
        window.alert ('ERRO escreva as informações')
    }else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 || p == 0){
            window.alert('Passo inválido ou Você não escreveu um passo! considerando passo 1')
            p = 1
        }
        if (i< f){
            //contagem cerscente
            for(let c = i; c <= f;c += p ){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}` 
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

        
    
    }


}