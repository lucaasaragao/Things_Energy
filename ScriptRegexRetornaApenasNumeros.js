function run (numeroDocumento){
    numeroDocumento = numeroDocumento.replace(/\D/g, '');
    return numeroDocumento;
}