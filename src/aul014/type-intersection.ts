type TemNome = {
  nome: string
}

type TemSobrenome = {
  sobrenome: string
}

type TemIdade = {
  idade: number
}

type Pessoa = TemNome & TemSobrenome & TemIdade

type AB = 'A' | 'B'

type AC = 'A' | 'C'

type Intersecao = AB & AC // eslint-disable-line

const pessoa: Pessoa = {
  nome: 'Dede',
  sobrenome: 'Altograu',
  idade: 50,
}

console.log(pessoa)

export default 1
