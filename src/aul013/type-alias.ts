type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corFavorita?: corFavorita
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corFavorita = CorRGB | CorCMYK

const pessoa: Pessoa = {
  nome: 'Dede',
  idade: 30,
  salario: 10_000, // =10000
}

export function setCorFavorita(pessoa: Pessoa, cor: corFavorita): Pessoa {
  return {
    ...pessoa,
    corFavorita: cor,
  }
}

console.log(setCorFavorita(pessoa, 'Preto'))
