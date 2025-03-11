type MapStringsCallback = (item: string) => string

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]))
  }

  return newArray
}

const strings = ['a', 'b', 'c']

const result = mapStrings(strings, (item) => item.toUpperCase())

console.log(result)

export default 1
