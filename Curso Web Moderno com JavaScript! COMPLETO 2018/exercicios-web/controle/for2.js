const notas = [6.8, 8.6, 5.8, 7.2, 5.7, 10]

for(let i in notas){
	console.log(i, notas[i])
}

const pessoa ={
	nome: 'Ana',
	sobrenome: 'Silva',
	idade: 20,
	peso: 64
}

for(let atributo in pessoa){
	console.log(`${atributo} = ${pessoa[atributo]}`)
}