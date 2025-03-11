export class Empresa {
  public readonly nome: string
  readonly cnpj: string
  private readonly colaboradores: Colaborador[] = []

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    this.colaboradores.forEach((colaborador) => {
      console.log(colaborador)
    })
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly cargo: string,
  ) {}
}

const empresa1 = new Empresa('Nada', '11.111.111/0001-11')

const colaboradores1 = new Colaborador('Dede', 'Altograu', 'Dev')
const colaboradores2 = new Colaborador('Claudio', 'Dantas', 'Supervisor')
const colaboradores3 = new Colaborador('Maria', 'Lopes', 'Gerente')

empresa1.adicionarColaborador(colaboradores1)
empresa1.adicionarColaborador(colaboradores2)
empresa1.adicionarColaborador(colaboradores3)

console.log(empresa1)

empresa1.mostrarColaboradores()

export default 1
