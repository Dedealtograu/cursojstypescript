enum Cores {
  vermelho = 10,
  azul = 100,
  amarelo = 1000,
}

enum Cores {
  preto = 'preto',
  branco = 'branco',
  verde = 201,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor])
}

escolhaCor(Cores.amarelo)
