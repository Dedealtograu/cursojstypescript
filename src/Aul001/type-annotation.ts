/* eslint-disable */

// Tipos por inferencia

let nome: string = 'João'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-simbolo')
// let big: bigint = 10n

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayStrings: Array<string> = ['João', 'Maria']
let arrayStrings2: string[] = ['João', 'Maria']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'João',
  idade: 30
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
