// ver se o  usuario tem email cadastrado

function run(recuperaperfil) {
    var recuperaperfil = JSON.parse(recuperaperfil).objeto;

    if (recuperaperfil.email != null){
        var email = recuperaperfil.email;
    }

    else{
        var email = "Sem email";
    }

    return JSON.stringify({
        telefone: recuperaperfil.celular,
        email: email
    });
}