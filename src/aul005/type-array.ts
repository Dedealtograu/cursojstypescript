// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1)
}

const result = multiplicaArgs(1, 2, 3, 4, 5)
console.log(result)

function concatenaString(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor)
}

console.log(concatenaString('b', 'o', 'l', 'a'))
