let contador = 1
while(contador <= 10){
	console.log('Contador While = ' + contador)
	contador++
}

for (let i = 1; i <= 10; i++){
	console.log('Contador For = ' + i)
}

const notas = [6.8, 8.6, 5.8, 7.2, 5.7, 10]
for(let i = 0; i < notas.length; i++){
	console.log('Nota '+( i + 1 ) + ' = ' + notas[i])
}