function calculaIdade (anos) {
    return `Daque a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}

const pessoa1 ={
    nome: 'Lucas',
    idade: 28,
};

const pessoa2 ={
    nome: 'Beatriz',
    idade: 29,
};
const animal ={
    nome: 'Cevada',
    idade: 1,
    raca: 'Shitzu',
};

console.log(calculaIdade.apply(animal, [2]));