function run(telefones, opcaoUsuario) {

    var telefones = JSON.parse(telefones);
    
    var endereco = "";
    var corpoCliente = JSON.parse(corpoCliente);

    var opcUsuario = opcaoUsuario - 1;

    var uc = corpoCliente.lista[opcUsuario];

    var nomeTitular = uc.nomeTitular;
    var primeiroNomeTitular = nomeTitular.split(' ');
    primeiroNomeTitular = primeiroNomeTitular[0];

    var endereco = "";
    if (uc.complemento == null) {
        endereco = uc.endereco + " - " +
            uc.numeroImovel + " - " +
            uc.bairro + " - " +
            uc.localidade + " - " +
            uc.uf;
    }
    
    else {
        endereco = uc.endereco + " - " +
            uc.numeroImovel + " - " +
            uc.complemento + " - " +
            uc.bairro + " - " +
            uc.localidade + " - " +
            uc.uf;
    }

    if (uc.numeroCdc){
        return JSON.stringify({
            uc: {
                codigoEmpresaWeb: uc.codigoEmpresaWeb,
                numeroCdc: uc.numeroCdc,
                digitoVerificador: uc.digitoVerificador,
                titular: uc.nomeTitular,
                primeiroNomeTitular: primeiroNomeTitular,
                usuariotitular: uc.usuarioTitular
            },
            localizacao:{
                nomeMunicipio: uc.nomeMunicipio,
                uf: uc.uf,
                localidade: uc.localidade,
                bairro: uc.bairro,
                endereco: uc.endereco,
                numeroImovel: uc.numeroImovel,
                complemento: uc.complemento,
                cep: uc.cep,
                longitude: uc.longitude,
                latitude: uc.latitude,
                enderecoformatado: endereco
            }
        });
    }

    else{
        return JSON.stringify({
            uc: {
                codigoEmpresaWeb: uc.codigoEmpresaWeb,
                numeroCdc: uc.numeroUc,
                digitoVerificador: uc.digitoVerificador,
                titular: uc.nomeTitular,
                primeiroNomeTitular: primeiroNomeTitular,
                usuariotitular: uc.usuarioTitular
            },
            localizacao:{
                nomeMunicipio: uc.nomeMunicipio,
                uf: uc.uf,
                localidade: uc.localidade,
                bairro: uc.bairro,
                endereco: uc.endereco,
                numeroImovel: uc.numeroImovel,
                complemento: uc.complemento,
                cep: uc.cep,
                longitude: uc.longitude,
                latitude: uc.latitude,
                enderecoformatado: endereco
            }
        });
    }





    
}