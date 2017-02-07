/**
*
* Objeto que gera elementos randomicamente
*
* @example objRand.mask= true|false;
* @example objRand.r(int);
* @example objRand.cnpj();
* @example objRand.cpf();
**/
var objRand = {
  //confgura mascara ou não
  mask : true,
  //gera numero aleatorio de acordo com casas decimais enviadas
  r : function(potencia) {
	var pot = Math.pow(10, potencia);
    return Math.floor(Math.random()*pot).toString();
  },
  //gerador cpf
  cpf:function(){
    //cpf com mascara
    if(this.mask){
  		return this.r(3)+'.'+this.r(3)+'.'+this.r(3)+'-'+this.r(2);  
    }
	//cpf apenas numeros
	return this.r(3)+this.r(3)+this.r(3)+this.r(2);  
  },
  //gera cnpj
  cnpj:function(){ 
    //gera cnpj com mascara
    if(this.mask){
  		return this.r(2)+'.'+this.r(3)+'.'+this.r(3)+'/'+this.r(4)+'-'+this.r(2);  
    }
	//cnpj apenas numeros
	return this.r(2)+this.r(3)+this.r(3)+this.r(4)+this.r(2);
  }
}
