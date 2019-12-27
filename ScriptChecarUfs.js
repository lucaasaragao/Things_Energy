// função para checar uf's BR
function run(ufTmp) {
  var ufTmp = ufTmp.toUpperCase();
  var ufs = ['PB', 'PE', 'SE', 'SP', 'RJ', 'AL', 'AC', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA','MG', 'MS', 'MT', 'PA', 'PI', 'PR', 'RN', 'RO', 'RR', 'RS', 'SC', 'TO'];
  var uf_valida = ufTmp;
  if (ufs.indexOf(uf_valida) > -1) {
    return true;
  } else {
    return false;
  }
}