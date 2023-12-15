const alunos = [
  { nome: 'Alexandre', nota: 9 },
  { nome: 'Odorizzi', nota: 7 },
  { nome: 'Mari', nota: 5 },
  { nome: 'Jesus', nota: 10 },
  { nome: 'Maria', nota: 5 },
];

function filtrarAlunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
