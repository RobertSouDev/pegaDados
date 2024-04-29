const palavras = "rato roeu a ropa do rei de roma a maior palavra e essa aquiiiiiiiiiiiiiiiii";

function maiorPalavra(arg) {
    if (!arg || typeof arg !== "string") return null;
    const listaPalavras = arg.trim().split(" ");

    const maiorDeTodas = listaPalavras.reduce((maior, atual) => {
        if (atual.length > maior.length) {
            return atual;
        } else {
            return maior;
        }
    }, "");

    return maiorDeTodas;
}

console.info(maiorPalavra(palavras)); // Saída: aquiiiiiiiiiiiiiiiii
