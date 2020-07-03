function verificaCpf(cpf){ // função velha
    if (cpf.length > 11){
        return false;
    }
    return true;
}
console.log(verificaCpf("10246287446"));


const verificarCpf = tipoDocumento =>{ // função nova
    if(tipoDocumento.length == 11 || tipoDocumento.length == 10){
        return "CPF";
    }
    else if(tipoDocumento.length == 14 || tipoDocumento.length == 13){
        return "CNPJ";
    }
    return false;
}
console.log(verificarCpf("102462874466"));

