//Questao3//

function notaAluno(notaAluno) {
  let valorNota = parseFloat(notaAluno)

  if (valorNota < 38) {
      console.log('Reprovado!!')
  }

  var valorMultiplo = valorNota
  while (valorMultiplo <= 100) {
      valorMultiplo++
      if (valorMultiplo % 5 == 0) {
          break
      }
  }
  
  let diferent = valorMultiplo - valorNota
  var notaArrendonda = 0
  if (diferent < 3) {
      notaArrendonda = valorMultiplo
  } else {
      notaArrendonda = valorNota
  }

  if (notaArrendonda < 40) {
      console.log('Reprovado!!')
  } else {
      console.log('Aprovado!!')
  }
  console.log(notaArrendonda)
}

notaAluno(84);
