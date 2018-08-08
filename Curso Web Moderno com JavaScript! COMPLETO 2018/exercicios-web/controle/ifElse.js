const imprimeResultado = function(nota){
	if(nota >= 7){
		console.log('Aprovado! ' + nota)
	}else{ 
		console.log('Reprovado! ' + nota)
	}
}
imprimeResultado(8)
imprimeResultado(6)
imprimeResultado('Epa!') // Cuidado !!!
