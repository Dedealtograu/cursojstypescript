function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const gato = {
  nome: 'Felix',
  raca: 'Persa',

  fazbarulho(): void {
    console.log(this.nome + ' ' + 'Miau')
  },
}

gato.fazbarulho()

semRetorno('João', 'Maria', 'Pedro')
