function requisicaoApiEnergisa() {

    var url = document.getElementById('url').nodeValue; // aqui cola a url da requisição api

    var xhttp= new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send(); // a execução do script para aqui até o servidor responder 

    document.getElementById('resposta').innerHTML = xhttp.responseText; // essa resposta pode ser tratada em uma dive, ou pode nem aparecer.

    // no html deve ser chamada a função requisicaoApiEnergisa com o evento 'onclick' -> requisicaoApiEnergisa();

}

