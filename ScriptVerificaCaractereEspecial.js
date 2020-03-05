// função para entrada incorreta do usuario 
function run(input) {
  var entradaIncorreta = ['+', '=', '*', '?', ';', ':', '´', ']', '[', '``', '.', ',', '^', '^^', '~','~~', '-', '(', ')', '&', '%', '$', '#', '@', '!', '/', '|',];
  var valida_entrada = input;
  if (entradaIncorreta.indexOf(valida_entrada) > -1) {
    return true;
  } else {
    return false;
  }
}

caracEspecial