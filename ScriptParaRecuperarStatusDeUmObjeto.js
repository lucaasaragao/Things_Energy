function run(corporespostaucnaoautenticado,taxasPrazosReligacao) {
    
    var contextoInstalacao = JSON.parse(corporespostaucnaoautenticado).objeto.retorno[0].dadosInstalacao;
    var taxasEPrazos = JSON.parse(taxasPrazosReligacao).objeto;

    var valorNormal = "";
    var valorUrgencia = "";
    var prazo = "";
    var mensagens = "";

    // Recuperando os dados da intalação
    var tipoligacao = contextoInstalacao.tipoLigacao;
    var areaRural = contextoInstalacao.areaRural;

/*
Monofásico
*/
    if(tipoligacao == "MONOFASICO" & areaRural == false){
       
        valorNormal = taxasEPrazos.valorReligacaoNormal[0].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;

    }else if(tipoligacao == "MONOFASICO" & areaRural == true){
        
        valorNormal = taxasEPrazos.valorReligacaoNormal[0].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;
/*
Bifasico
*/
    }else if(tipoligacao == "BIFASICO" & areaRural == false){
       
        valorNormal = taxasEPrazos.valorReligacaoNormal[1].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;

    }else if(tipoligacao == "BIFASICO" & areaRural == true){
        
        valorNormal = taxasEPrazos.valorReligacaoNormal[1].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;
    /*
Trifásico
*/
    }else if(tipoligacao == "TRIFASICO" & areaRural == false){
       
        valorNormal = taxasEPrazos.valorReligacaoNormal[1].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;

    }else if(tipoligacao == "TRIFASICO" & areaRural == true){
        
        valorNormal = taxasEPrazos.valorReligacaoNormal[2].valor;
        valorUrgencia = "Infelizmente você não pode solicitar religação com urgência"
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `No seu caso sua ligação é Monofásico.\nA taxa para ligação normal é: R$${valorNormal}\n` 
            + `${valorUrgencia}\n` 
            + `Esse é o prazo para religação na a área urbana: ${prazo}`;
    }
    
    
    return mensagens
}



corporespostaucnaoautenticado
taxasPrazosReligacao

