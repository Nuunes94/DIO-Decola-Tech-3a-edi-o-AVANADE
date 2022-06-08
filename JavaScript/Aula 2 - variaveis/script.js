tipos primitivos

// boolean
var vOuF = false;
console.log (typeof(vOuF));

//number
var numeroQualquer = 1;
console.log (typeof(numeroQualquer));

// string
var name = "Lucas"
console.log (typeof(name));

// function
var funcao = function() {}
console.log (typeof (funcao)); 

// como declarar
var variavel = "Lucas";
variavel = "Nunes";
console.log (variavel);

let variavel2 = "Lucas"
variavel2 = "Nunes"
console.log(variavel2);

const constante = "Lucas";
console.log (constante);

var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "Local"
    console.log(escopoLocalInterno);
}
escopoLocal();

//atribuição

var atribuição = "Lucas";
console.log (atribuição);

// comparativo

var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// soma
var adicao = 1+1;
console.log(adicao);

// subtração
var subtração = 2-1;
console.log(subtração);

//multiplicação
var multiplicação = 2*2;
console.log(multiplicação);

// divisão real
var divisaoReal = 4/2;
console.log(divisaoReal);

// divisão inteira
var divisaoInteira = 5%2;
console.log(divisaoInteira);

// potenciação
var potenciacao = 2**10;
console.log(potenciacao);

// maior que
var maiorQue = 5>2;
console.log(maiorQue);

// menor que
var menorQue = 5<2;
console.log(menorQue);

// maior ou igual
var maiorOuIgual = 5>=2;
console.log(maiorOuIgual);

// menor ou igual
var menorOuIgual = 5<=2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !false;
console.log(nao);