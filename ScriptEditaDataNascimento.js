/**
Busca data de nascimento retornado pela serpro e modifica a string
**/
function run(dadosSepro) {
    // dataNascimento = JSON.parse(dadosserpro).nascimento;
     dataNascimento = dadosSepro;
     dataNascimento = dataNascimento.replace(/(\d{2})(\d)/,"$1/$2"); 
     dataNascimento = dataNascimento.replace(/(\d{2})(\d)/,"$1/$2"); 
     
     return dataNascimento;
 }