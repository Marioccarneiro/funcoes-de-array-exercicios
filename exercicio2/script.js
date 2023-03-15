const array = [27, 42, 101, 12, 9, 25, 52, 150]
console.log(array)
//1

const quintuplos = array.map((elemento, indice, array) => {
    const calculo = elemento * 5 
    return calculo
})

console.log(quintuplos)

//2 

const metades = quintuplos.map((elemento, indice, array) => {
    const calculo = elemento / 2
    return calculo
})

console.log(metades)