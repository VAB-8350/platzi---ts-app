// nico => [n,i,c,o] => string => string[]
// [n,i,c,o] => nico => string[] => string

export function parseStr (input: string): string[]
export function parseStr (input: string[]): string
export function parseStr (input: number): boolean

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else if (typeof input === 'string') {
    return input.split('') // string[]
  } else if (typeof input === 'number') {
    return input >= 18
  }
}

const rta1 = parseStr(['n','i','c','o'])

rta1.toLowerCase()
// if (Array.isArray(rta1)) {
//   rta1.reverse()
// }

const rta2 = parseStr('nico')

rta2.reverse()
// if (typeof rta2 === 'string') {
//   rta2.toLowerCase()
// }

const rta3 = parseStr(4)

console.log(rta3)
