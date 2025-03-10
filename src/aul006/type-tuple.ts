const dadosCliente: readonly [number, string] = [1, 'João']
const dadosCliente2: [number, string, string?] = [1, 'João', 'Seboso']
const dadosCliente3: [number, string, ...string[]] = [1, 'Maria', 'Gorda', 'Linda', 'Chata']

// dadosCliente[0] = 100

console.log(dadosCliente)
console.log(dadosCliente2)
console.log(dadosCliente3)
