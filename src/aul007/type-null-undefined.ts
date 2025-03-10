let x
if (typeof x === 'undefined') {
  x = 10
}

console.log(x)

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string
  lastName?: string
} {
  return {
    firstName,
    lastName,
  }
}

const person = createPerson('João', 'Silva')
console.log(person)
