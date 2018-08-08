//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
	const saudacao = 'falaa' // contexto léxico 2
	return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
	nome: 'Wesley', 
	idade: 21,
	peso: 72,
	endereco: {
		logradouro: 'Praça joaquim nabuco',
		numero: 10,
	}
}
console.log(saudacao)
console.log(exec())
console.log(cliente)