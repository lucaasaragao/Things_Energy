function run(corpoverificacontexto) {
    var contexto = JSON.parse(corpoverificacontexto).objeto;
    var solicitacoesAbertas = contexto.solicitacoesAbertas;

    var temSolicitacaoReligacao = false;
    var codservicos = [2,3,4,81,82]; // num das solicitações que impedem usuarios de relig

    var protocoloReligacao = 0;

    if(solicitacoesAbertas.length > 0){ 

        for(i = 0; i < solicitacoesAbertas.length; i++ ){ 
            var codservico = solicitacoesAbertas[i].codigoServico;   
            if ((codservico == 2) || (codservico == 3) || (codservico == 4) || (codservico == 81) || (codservico == 82)){
                protocoloReligacao = solicitacoesAbertas[i].protocolo;   
                temSolicitacaoReligacao = true;
            }

        }   
        
    }


    return JSON.stringify({
        fornecimentoCortado: contexto.fornecimentoCortado,
        indicativoCorte: contexto.indicativoCorte,
        contratoAtivo: contexto.contratoAtivo,
        solicitacoesAbertas: contexto.solicitacoesAbertas,
        possuiOSreligacao: temSolicitacaoReligacao,
        protocoloReligacao: protocoloReligacao
    });
}