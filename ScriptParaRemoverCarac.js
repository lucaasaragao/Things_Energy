/*
NormalizeInput
Substituindo caracteres especiais e emojis usando o normalize do ECMA 5
*/ 

function  run(pontodereferencia) { 
    pontodereferencia = pontodereferencia.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/([^\w]+|\s+)/g, ' ')
    return pontodereferencia;
  }
  