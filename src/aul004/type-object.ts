const objetoA: {
  chaveA: string
  chaveB?: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
}

objetoA.chaveA = 'Outro valor'
objetoA.chaveC = 'chave opcional'
objetoA.chaveD = 'Nova chave'

console.log(objetoA)
