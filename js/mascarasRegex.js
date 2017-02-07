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
*/
function validaTelefoneNacional(telefone){
    var retorno = false;
    //cast para string
    if(typeof telefone != "string"){
	telefone = telefone.toString();
    }
    //limpa string para validacao
    telefone = telefone.replace(/\D/g,"");
    //aplica ER
    var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
    if(valida){
	//prefixo e sufixo já é um telefone
        if(valida[5] && valida[6]){
		retorno = fone = valida[5]+"-"+valida[6];
		//caso celular
		if(valida[4]){
		     retorno = valida[4]+fone;
		}
   		if(valida[2] && valida[3] || valida[3]){
                	retorno = valida[2]+"("+valida[3]+")"+fone;
			//caso celular
			if(valida[4]){
			     retorno = valida[2]+"("+valida[3]+")"+valida[4]+fone;
			}
			 if(!valida[2]){
                        	retorno = "("+valida[3]+")"+fone;
				//caso celular
				if(valida[4]){
					retorno = "("+valida[3]+")"+valida[4]+fone;
                        	}
                 	}
            	}
        }
    }
    return retorno;
}

/**
* Substitui uma tag html por outra tag 
* ex: replaceTag('<span>teste</span>','span','b');
* "<span>teste</span>".replace(/(<\/?)(\w+?)(>)/g,"$1b$3")
*/
function replaceTag(html, oldtag, newtag){
	var re = new RegExp('(<\\/?)('+oldtag+')(>)','g');
	return html.replace(re, "$1"+newtag+"$3");
}
