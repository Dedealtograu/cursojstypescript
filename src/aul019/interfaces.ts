interface Nome {
  nome: string
}

interface Sobrenome {
  sobrenome: string
}

interface NomeCompleto {
  nomeCompleto(): string
}

export interface Pessoa extends Nome, Sobrenome, NomeCompleto {} // eslint-disable-line

export class Pessoa implements Nome, Sobrenome, NomeCompleto { // eslint-disable-line
  nome: string
  sobrenome: string

  constructor(nome: string, sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoa: Pessoa = {
  nome: 'Dede',
  sobrenome: 'Altograu',
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  },
}

console.log(pessoa)

export default 1
