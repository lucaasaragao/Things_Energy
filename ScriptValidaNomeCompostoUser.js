function run(campo) {
    var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if(campo.match(regex)) {
        if (/\S/.test(campo)){
            if(campo.length < 3 || campo.split(" ").length > 1){ // verificar esse > pode ser usado tbm o < 
                return false;
            }else{
                return true; 
            }
        }

        else{
            return false;
        }
    } 
    else { 
        return false; 
    }
}

