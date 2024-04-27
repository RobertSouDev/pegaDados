//'https://fakestoreapi.com/products'
async function pegaDados(){
    const resultado =  await fetch('https://fakestoreapi.com/products')
    const resultadoConvertido = await resultado.json()
    console.log(resultadoConvertido)
}

pegaDados()