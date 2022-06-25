const alunos = [
    {
        nome: 'Lucas',
        nota: 8,
        turma: '20',
    },
    {
        nome: 'Beatriz',
        nota: 10,
        turma: '18',
    },
    {
        nome: 'Cevada',
        nota: 4,
        turma: '2',
    },
    {
        nome: 'Mario',
        nota: 9,
        turma: '2',
    },
    {
        nome: 'Marceline',
        nota: 8,
        turma: '2',
    },
    {
        nome: 'Bartolomeu',
        nota: 3,
        turma: '2',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return `Os alunos aprovados são: ${aprovados}`;
       
}

function alunosReprovados(arr, media) {
    let reprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota < media) {
            reprovados.push(nome);
        }
    }
    return `Os alunos reprovados são: ${reprovados}`;
       
}
console.log (alunosAprovados(alunos, 5)); 
console.log (alunosReprovados(alunos, 5));



