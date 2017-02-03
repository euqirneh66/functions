/**
* Validacao e mascara CEP
* @author euqirneh66
**/
fuction mascaraCep(variavel){
	var val = variavel.match(/^([0-9]{2})([0-9]{3})([0-9]{3})$/);
    var retorno = false;
    if(val)
		retorno = (val[1]+'.'+val[2]+'-'+val[3]);

    return retorno;
    
}

/*
* simples validação telefone nacional
* @TODO refatorar
*/
function validaTelefoneNacional(telefone){
    var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
    if(valida){
    	console.log(valida);
    }
}
