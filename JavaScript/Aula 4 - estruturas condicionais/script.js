var jogador1 = 0;
var jogador2 = 0;
var placar;

// If ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : 
console.log('jogadores Invalidos!');

// usando if
if (jogador1 > 0 && jogador2 == 0) {
console.log('jogador 1 marcou ponto!');
placar = jogador1 > jogador2;
} 
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
console.log('jogador 2 marcou ponto!');
placar = jogador2 > jogador1;
} 
// usando else
else {
console.log('Ninguem marcou ponto');
}
// ussando switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou!')
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!')
        break;
    default:
        console.log('Ninguem ganhou!')
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propiedade1: 'valor', propiedado2: 'valor2', propiedade3: 'valor3',}

// for - executa uma instrução até que seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
// for/in executa repetição a partir de uma propiedade
// com array
for (let i in array){
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
}
// for of - executa repetição a partir de valor
// com array
for (i of array){
    console.log(i);
}
//  com object
for (i of object.propiedade1) {
    console.log(i);
}
// usando o while
var a = 0;

while (a < 10){
    a++
    console.log(a);
}
// do while / Executa função até ser verdade
do {
    a++;
    console.log(a);
} while (a < 10);