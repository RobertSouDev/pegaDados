async function teste(){

        const response =  await fetch('https://fakestoreapi.com/products/1')



        const resultado =  await response.json()

        // const imgCard = document.querySelector('#img_card')
        // imgCard.src = resultado.image

        // const titulo = document.querySelector('#titulo')
        // titulo.textContent = resultado.title

        const descricao = document.querySelector('#desquicao')
        descricao.textContent = resultado.description

        const preco = document.querySelector('#preco')
        preco.textContent = resultado.price

}

teste()