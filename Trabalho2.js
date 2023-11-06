const alunos = [
    {
      nome: 'Antonio',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'LP1', nota: 7 },
      ],
    },
    {
      nome: 'Andreia',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'LP1', nota: 8 },
      ],
    },
    {
      nome: 'Leonardo',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'LP1', nota: 10 },
      ],
    }
  ]


  const alunosComMedia = alunos.map((aluno) => {
    const { notas } = aluno;
    let somaNotas = 0;
  
    for (let i = 0; i < notas.length; i++) {
      somaNotas += notas[i].nota;
    }
  
    const media = somaNotas / notas.length;
  
    return {
      ...aluno,
      mediaGeral: media
    };
  });
  
  console.log(alunosComMedia);
  
  
  
  
  
  