// Função para checar orgão expedidor
function run(orgaoExpedidor) {

  var orgaoExpedidor = orgaoExpedidor.toUpperCase();
  var orgaos = ['SSP', 'DETRAN', 'OAB', 'CARTÓRIO CIVIL ','CARTORIO CIVIAL','POLICIA FEDERAL', 'PF', 'POLÍCIA FEDERAL', 'ABNC', 'DPF', 'CGPI', 'CGPMAF', 'CNIG', 'COREN', 'CNT', 'CRA', 'CRAS', 'OMB', 'POF', 'DPF', 'POM', 'SNJ', 'SJS', 'SDS', 'SES', 'EST'];
  var orgao_valido = orgaoExpedidor;

  if (orgaos.indexOf(orgao_valido) > -1) {
    return true;
  } else{
    return false;
  }
}
