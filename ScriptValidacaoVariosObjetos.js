/*

Função que retorna débitos do cliente, recuperando esses débitos por cpf

 */

function run(corpoClienteDebitos) {
    var debitosCliente = JSON.parse(corpoClienteDebitos).objeto;
    var descricaoDebitos = JSON.parse(corpoClienteDebitos).dadosDebitos;

    var qntContasPendentes = debitosCliente.quantidadeContasPendentes;
    var valorTotalDebitos = debitosCliente.valorTotalDebitos;

    var debitosNormais = descricaoDebitos;
    var debitosIncobraveis = descricaoDebitos;

    var qntDebitosNormais = 0;
    var qntDebitosIncobraveis = 0;

    var mensagem = '';

    if (debitosNormais != null) {
        qntDebitosNormais = qntDebitosNormais.length;
    }

    if (debitosIncobraveis != null) {
        qntDebitosIncobraveis = qntDebitosIncobraveis.length;
    }

    if (debitosNormais > 0) {
        for (i = 0; i < qntDebitosNormais; i++) {

            var numeroFatura = qntDebitosNormais[i].numeroFatura;
            var mesReferencia = qntDebitosNormais[i].mesReferencia;
            var anoReferencia = qntDebitosNormais[i].anoReferencia;
            var valorFatura = qntDebitosNormais[i].valorFatura;
            var faturaDeConsumo = qntDebitosNormais[i].faturaDeConsumo;
            var informadaComoPaga = qntDebitosNormais[i].informadaComoPaga;
            var dataVencimento = qntDebitosNormais[i].dataVencimento;

            // Formatando algumas entradas
            var dtVencimento = dataVencimento.split(' ')[0];
            var mesFormatado = mes(mesReferencia);

            mensagem = "Encontrei o débito abaixo:`.\n \n" +
                `🗓️ Referencia:🗓 ${mesReferencia}/ ${anoReferencia}\n\n` +
                `💰 Valor: ${valorFatura}\n\n` +
                `🕒 Vencimento: ${dataVencimento}`;

        }

    }

    return mensagem
}