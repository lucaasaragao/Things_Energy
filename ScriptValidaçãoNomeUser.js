function run(input) {

    var nomeInteiro = input || "";
    var resultado = {};


    if (nomeInteiro.length > 0) {
        var nameTokens = nomeInteiro.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];
        

        if (nameTokens.length > 3) {
            resultado.nome = nameTokens.slice(0, 2).join(' ');
        } else {
            resultado.nome = nameTokens.slice(0, 1).join(' ');
        }

        if (nameTokens.length > 2) {
            resultado.segundoNome = nameTokens.slice(-2, -1).join(' ');
            resultado.ultimoNome = nameTokens.slice(-1).join(' ');
        } else {
            resultado.segundoNome = nameTokens.slice(-1).join(' ');
            resultado.ultimoNome = "";
        }
    }

    resultado = JSON.stringify(resultado);
    return resultado;
}








