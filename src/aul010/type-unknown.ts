let x: unknown

x = 10
x = 'João'
x = true
x = {
  nome: 'João',
  idade: 30,
}
x = 7

const y = 10

if (typeof x === 'number') {
  console.log(x + y)
}
