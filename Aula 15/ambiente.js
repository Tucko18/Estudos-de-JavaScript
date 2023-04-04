let num = [5, 8, 9, 2, 3]
num.push(1)
num.sort()
console.log(`os vetores são ${num}`)
console.log(`o vetor tem ${num.length} posições`) 
console.log(`o primeiro valopr do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
console.log(`o valor 8 esta na posição ${pos}`)
}