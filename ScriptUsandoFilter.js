const corpoHistoricoFaturas = `{
    "lista": [
        {
            "cdcVinculado": 1992466,
            "digitoVerificadorCdc": 0,
            "cdcCadastrado": 1992466,
            "numeroBancoConta": null,
            "numeroAgenciaBanco": null,
            "conta": null,
            "anoReferencia": 2020,
            "mesReferencia": 4,
            "anoFatura": 2020,
            "mesFatura": 4,
            "numeroFatura": 42628811,
            "valorFatura": 89.7,
            "indicadorSituacao": 2,
            "dataLeitura": "23/04/2020 00:00:00",
            "dataLeituraISO": "2020-04-23T00:00:00",
            "dataVencimento": "16/05/2020 00:00:00",
            "dataVencimentoISO": "2020-05-16T00:00:00",
            "dataPrevisaoCorte": null,
            "dataApresentacao": "23/04/2020 00:00:00",
            "dataApresentacaoISO": "2020-04-23T00:00:00",
            "dataProximaLeitura": "22/05/2020 00:00:00",
            "dataProximaLeituraISO": "2020-05-22T00:00:00",
            "dataPagamento": "24/04/2020 00:00:00",
            "dataPagamentoISO": "2020-04-24T00:00:00",
            "indicadorPagamento": true,
            "situacaoPagamento": "Pago no prazo",
            "codigoBarra": "00190.00009 03150.244006 09424.554179 1 82570000008970",
            "codigoBarraFaturaLis": "00191825700000089700000003150244000942455417",
            "consumo": 106,
            "leituraAtual": 10409,
            "leituraAnterior": 10303,
            "quantidadeDiaConsumo": 31,
            "mediaConsumo": 122.0,
            "faturadoPorMedia": false,
            "faturadoPorMinimo": false,
            "indicadorDebitoAutomatico": false,
            "faturaDeConsumo": true,
            "indicadorCorte": false,
            "valorLiquido": 86.25,
            "valorIluminacaoPublica": 3.45,
            "valorICMS": 23.28,
            "valorTaxa": 0.0,
            "numeroAvisoConta": 540100186,
            "indicadorTipoFaturamento": null,
            "bandeiraTarifaria": "Verde",
            "formaPagamento": null,
            "canalPagamento": null,
            "informadaComoPaga": false,
            "numeroContrato": null,
            "taxasAFaturar": null,
            "detalhamentoFatura": {
                "servicoDistribuicaoEnergia": 22.72,
                "compraEnergia": 28.32,
                "perdasEnergia": 0.0,
                "servicoTransmissao": 3.38,
                "encargosSetoriais": 3.42,
                "impostosDiretosEncargos": 28.42,
                "outrosServicos": 0.0
            }
        },
        {
            "cdcVinculado": 1992466,
            "digitoVerificadorCdc": 0,
            "cdcCadastrado": 1992466,
            "numeroBancoConta": null,
            "numeroAgenciaBanco": null,
            "conta": null,
            "anoReferencia": 2020,
            "mesReferencia": 3,
            "anoFatura": 2020,
            "mesFatura": 3,
            "numeroFatura": 40968707,
            "valorFatura": 102.3,
            "indicadorSituacao": 2,
            "dataLeitura": "23/03/2020 00:00:00",
            "dataLeituraISO": "2020-03-23T00:00:00",
            "dataVencimento": "16/04/2020 00:00:00",
            "dataVencimentoISO": "2020-04-16T00:00:00",
            "dataPrevisaoCorte": null,
            "dataApresentacao": "23/03/2020 00:00:00",
            "dataApresentacaoISO": "2020-03-23T00:00:00",
            "dataProximaLeitura": "23/04/2020 00:00:00",
            "dataProximaLeituraISO": "2020-04-23T00:00:00",
            "dataPagamento": "16/04/2020 00:00:00",
            "dataPagamentoISO": "2020-04-16T00:00:00",
            "indicadorPagamento": true,
            "situacaoPagamento": "Pago no prazo",
            "codigoBarra": "00190.00009 03150.244006 09037.752178 4 82270000010230",
            "codigoBarraFaturaLis": "00194822700000102300000003150244000903775217",
            "consumo": 0,
            "leituraAtual": 10303,
            "leituraAnterior": 10181,
            "quantidadeDiaConsumo": 42,
            "mediaConsumo": 0.0,
            "faturadoPorMedia": false,
            "faturadoPorMinimo": true,
            "indicadorDebitoAutomatico": false,
            "faturaDeConsumo": true,
            "indicadorCorte": false,
            "valorLiquido": 98.37,
            "valorIluminacaoPublica": 3.93,
            "valorICMS": 26.55,
            "valorTaxa": 0.0,
            "numeroAvisoConta": 540100181,
            "indicadorTipoFaturamento": 3,
            "bandeiraTarifaria": "Verde",
            "formaPagamento": null,
            "canalPagamento": null,
            "informadaComoPaga": false,
            "numeroContrato": null,
            "taxasAFaturar": null,
            "detalhamentoFatura": {
                "servicoDistribuicaoEnergia": 26.14,
                "compraEnergia": 32.59,
                "perdasEnergia": 0.0,
                "servicoTransmissao": 3.89,
                "encargosSetoriais": 3.93,
                "impostosDiretosEncargos": 31.82,
                "outrosServicos": 102.3
            }
        }
    ],
    "codigo": "OK",
    "mensagem": "2 faturas recuperadas com sucesso.",
    "cdc": 1992466,
    "protocolo": 9052340138,
    "codigoEmpresa": 5,
    "categoria": "OK"
}`

function run(corpoHistoricoFaturas) {

    const corpoFaturas = JSON.parse(corpoHistoricoFaturas).lista;
    const codEmpresa = JSON.parse(corpoHistoricoFaturas).codigoEmpresa;

    const consumo = corpoFaturas.consumo;
    const isRed = [];
    const procurarConsumo = corpoFaturas.filter((item) => {
        return item.consumo === 0;
    })
    if (procurarConsumo.length == 1 && procurarConsumo[0].valorFatura == procurarConsumo[0].detalhamentoFatura
        .outrosServicos) {
        isRed.push(
            codEmpresa,
            procurarConsumo[0].cdcVinculado,
            procurarConsumo[0].digitoVerificadorCdc,
            procurarConsumo[0].anoFatura,
            procurarConsumo[0].mesFatura,
            procurarConsumo[0].numeroFatura

        );
    } else {
        return false;
    }
    console.log(isRed);
}
run(corpoHistoricoFaturas)