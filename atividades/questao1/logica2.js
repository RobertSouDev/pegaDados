// vou tenta fazer usando reduce estudei mas talvez agora a logica der certo

const str = "tentando00000 se agora eu consigo ver qual e maior palavraaa aqui"

function maiorDeTodas(arg){
    let listaDeArg = arg.split(' ')
    let maiorPalavra = listaDeArg.reduce((maior,atual)=>{
        return atual.length > maior.length ? atual: maior 
    }, " ")

    return maiorPalavra
}

console.log(`A maior palavra é: ${maiorDeTodas(str)}`)