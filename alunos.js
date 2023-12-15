const alunos = [
  { nome: 'Alexandre', nota: 9 },
  { nome: 'Odorizzi', nota: 7 },
  { nome: 'Mari', nota: 5 },
  { nome: 'Jesus', nota: 10 },
  { nome: 'Maria', nota: 5 },
];

// Função para retornar apenas os alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamar a função e imprimir o resultado
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
