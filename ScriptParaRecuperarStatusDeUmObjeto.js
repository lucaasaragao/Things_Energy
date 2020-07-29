function run(corporespostaucnaoautenticado,taxasPrazosReligacao) {
    
    var contextoInstalacao = JSON.parse(corporespostaucnaoautenticado).objeto.retorno[0].dadosInstalacao;
    var taxasEPrazos = JSON.parse(taxasPrazosReligacao).objeto;

    var valorNormal = "";
    var valorUrgencia = "";
    var prazo = "";
    var prazoUrgencia = "";
    var mensagens = "";

    // Recuperando os dados da intalação
    var tipoligacao = contextoInstalacao.tipoLigacao;
    var areaRural = contextoInstalacao.areaRural;

/*
Monofásico
*/
    if(tipoligacao == "MONOFASICO" & areaRural == false){
        valorNormal = taxasEPrazos.valorReligacaoNormal[0].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[0].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo monofásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na área urbana: ${prazo}`
            + `Esse é o prazo para religação urgente na área urbana: ${prazoUrgencia}`;

    }else if(tipoligacao == "MONOFASICO" & areaRural == true){ 
        valorNormal = taxasEPrazos.valorReligacaoNormal[0].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[0].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo monofásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na a área rural: ${prazo}`
            + `Esse é o prazo para religação urgente na a área rural: ${prazoUrgencia}`;
/*
Bifasico
*/
    }else if(tipoligacao == "BIFASICO" & areaRural == false){
        valorNormal = taxasEPrazos.valorReligacaoNormal[1].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[1].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo bifásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na a área urbana: ${prazo}`
            + `Esse é o prazo para religação urgente na a área urbana: ${prazoUrgencia}`;

    }else if(tipoligacao == "BIFASICO" & areaRural == true){ 
        valorNormal = taxasEPrazos.valorReligacaoNormal[1].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[1].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo bifásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na a área rural: ${prazo}`
            + `Esse é o prazo para religação urgente na a área rural: ${prazoUrgencia}`;
    /*
Trifásico
*/
    }else if(tipoligacao == "TRIFASICO" & areaRural == false){
        valorNormal = taxasEPrazos.valorReligacaoNormal[2].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[2].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorUrbanaUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo trifásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na a área urbana: ${prazo}`
            + `Esse é o prazo para religação urgente na a área urbana: ${prazoUrgencia}`;

    }else if(tipoligacao == "TRIFASICO" & areaRural == true){   
        valorNormal = taxasEPrazos.valorReligacaoNormal[2].valor;
        valorUrgencia = taxasEPrazos.valorReligacaoUrgencia[2].valor
        prazo = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralNormal;
        prazoUrgencia = taxasEPrazos.prazoReligacao.religacaoSemMedidorRuralUrgencia;
        mensagens = "A taxa para solicitar a religação varia de acordo com o tipo da sua ligação.\n \n" 
            + `A sua ligação é do tipo trifásica.\nA taxa para religação normal é: ${valorNormal}\n` 
            + `A taxa para religação urgente é: ${valorUrgencia}\n` 
            + `Esse é o prazo para religação normal na a área rural: ${prazo}`
            + `Esse é o prazo para religação urgente na a área rural: ${prazoUrgencia}`;
    }
    
    
    return mensagens
}
