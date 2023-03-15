const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
// 1


function caixaAlta (obj) {
    const newObj = {}
    // newObj.nome = `Mario`
    // newObj.profissao = `Dev`
    // newObj.username = `userLabenu`

    console.log(newObj)
    for(let propriedade in obj){
        newObj[propriedade] = objeto[propriedade].toUpperCase()
        
        console.log(propriedade)
    }

    console.log(newObj)
}

caixaAlta(objeto)

// 2

function retornaTexto (obj){

    return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`
}

console.log(retornaTexto(objeto))

// 3

function callback(objeto, callback) {

    const valor = callback(objeto)
    console.log(valor)
}

callback(objeto, caixaAlta)
callback(objeto, retornaTexto)